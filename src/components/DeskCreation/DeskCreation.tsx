import styles from './DeskCreation.module.scss';
import cn from 'classnames';
import { FC, useContext, useRef, useState } from 'react';
import { DeskInfoContext } from '../../contexts/deskInfo.context';

type DeskCreationProps = {
    className?: string;
}

export const DeskCreation: FC<DeskCreationProps> = ({ className }) => {
    const colorsStyles = ['red', 'yellow', 'blue', 'pink', 'purple'];

    const { setDeskName, setAccess, setColor } = useContext(DeskInfoContext);

    const [deskColor, setDeskColor] = useState<string>('default');

    const accessTypeRef = useRef<HTMLSelectElement>(null);
    const deskNameRef = useRef<HTMLInputElement>(null);

    const setDeskParams = () => {
        if (accessTypeRef.current?.value && setAccess) {
            setAccess(accessTypeRef.current?.value);
        }
        if (deskNameRef.current?.value && setDeskName) {
            setDeskName(deskNameRef.current?.value)
        }
        if (setColor) {
            setColor(deskColor);
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
                <select
                    ref={accessTypeRef}
                    name="access-type"
                    id="access-type"
                >
                    <option value='public'>private
                    </option>
                    <option value='private'>public
                    </option>
                </select>
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