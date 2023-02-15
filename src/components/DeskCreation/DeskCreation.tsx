import styles from './DeskCreation.module.scss';
import cn from 'classnames';
import { FC, useContext, useRef, useState } from 'react';
import { DeskInfoContext } from '../../contexts/deskInfo.context';

type DeskCreationProps = {
    className?: string;
    setIsCreationOpened: (isCreationOpened: boolean) => void;
}

export const DeskCreation: FC<DeskCreationProps> = ({ className, setIsCreationOpened }) => {
    const colorsStyles = ['red', 'yellow', 'blue', 'pink', 'purple'];

    const { setDeskName, setAccess, setColor } = useContext(DeskInfoContext);

    const [deskColor, setDeskColor] = useState<string>('default');
    const [isError, setIsError] = useState<boolean>(false);

    const accessTypeRef = useRef<HTMLSelectElement>(null);
    const deskNameRef = useRef<HTMLInputElement>(null);

    const setDeskParams = () => {
        if (deskNameRef.current?.value && accessTypeRef.current?.value) {
            if (setDeskName) {
                setDeskName(deskNameRef.current?.value)
            }
            if (setAccess) {
                setAccess(accessTypeRef.current?.value);
            }
            if (setColor) {
                setColor(deskColor);
            }

            setIsCreationOpened(false);
        }
    };

    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={cn(styles.deskInfo, styles[deskColor])}>
                <input
                    ref={deskNameRef}
                    type="text"
                    placeholder="Desk name"
                />
                {isError && <span></span>}
                <select
                    ref={accessTypeRef}
                    name="access-type"
                    id="access-type"
                >
                    <option value=''>---
                    </option>
                    <option value='public'>public
                    </option>
                    <option value='private'>private
                    </option>
                </select>
                {isError && <span></span>}
            </div>
            <div className={styles.color}>
                {colorsStyles.map((c) => (
                    <button
                        className={cn(styles[c], styles.colorButton)}
                        key={c}
                        onClick={() => setDeskColor(c)}
                    ></button>
                ))}
            </div>
            <div className={styles.createButton}>
                <button className={deskColor} onClick={setDeskParams}>Create Desk</button>
            </div>
        </div>
    );
};