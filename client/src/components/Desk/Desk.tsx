import { FC, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
    TaskCondition,
    DropDownList,
    Modal,
    SprintCreation,
    AppendCondition,
} from '..';

import {
    WorkSprintAPIInterface,
    DeskAPIInterface,
    TaskConditionAPIInterface,
} from '../../interfaces/deskData.interface';

import { getTaskConditions } from '../../http/taskConditionAPI';
import { getSprint } from '../../http/workSprintAPI';

import styles from './Desk.module.scss';
import cn from 'classnames';

type DeskProps = {
    deskData: DeskAPIInterface;
    sprintsData: WorkSprintAPIInterface[];
    className?: string;
};

export const Desk: FC<DeskProps> = ({ deskData, sprintsData, className }) => {
    const [taskConditions, setTaskConditions] = useState<
        TaskConditionAPIInterface[]
    >([]);

    const [sprintData, setSprintData] = useState<WorkSprintAPIInterface>({
        id: 0,
        name: '',
        startDate: new Date(0),
        endDate: new Date(0),
        createdAt: new Date(0),
        updatedAt: new Date(0),
        deskId: 0,
    });

    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const menuOptions = [
        { name: 'Настройки доски', onClick: () => navigate('') },
        {
            name: 'Создать спринт',
            onClick: () => {
                setIsModalOpened(true);
                setIsMenuOpened(false);
            },
        },
    ];

    useEffect(() => {
        getTaskConditions(deskData.id)
            .then((data) => setTaskConditions(data))
            .catch((err) => console.log(err));

        getSprint(Number(searchParams.get('sprintId')))
            .then((data) => {
                setSprintData(data);
            })
            .catch((err) => console.log(err));
    }, [searchParams]);

    return (
        <main className={cn(className, styles.deskContainer)}>
            <div className={styles.deskHeader}>
                <h1 className={styles.deskName}>{deskData.name}</h1>
                <select
                    name="sprint-select"
                    id="sprint-select"
                    onChange={(e) =>
                        setSearchParams({
                            deskId: `${deskData.id}`,
                            sprintId: `${e.target.value}`,
                        })
                    }
                >
                    {sprintsData.map((s) => (
                        <option
                            value={s.id}
                            key={s.id}
                            selected={
                                s.id === Number(searchParams.get('sprintId'))
                            }
                        >
                            {s.name}
                        </option>
                    ))}
                </select>
                <button
                    className={styles.menuButton}
                    onClick={(prev) => setIsMenuOpened((prev) => !prev)}
                >
                    ⬤ ⬤ ⬤
                </button>
                {isMenuOpened && (
                    <DropDownList
                        outline="black"
                        options={menuOptions}
                        className={styles.deskMenu}
                    />
                )}
            </div>
            <div className={styles.deskFrame}>
                <div className={styles.tasksFrame}>
                    {taskConditions.map((c) => (
                        <TaskCondition
                            conditionData={c}
                            sprintData={sprintData}
                            key={c.id}
                        />
                    ))}
                    <AppendCondition />
                </div>
            </div>
            {isModalOpened && (
                <Modal onClose={() => setIsModalOpened(false)}>
                    <SprintCreation
                        deskId={deskData.id}
                        onCreate={() => setIsModalOpened(false)}
                    />
                </Modal>
            )}
        </main>
    );
};
