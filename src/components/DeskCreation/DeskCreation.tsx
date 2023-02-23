import styles from './DeskCreation.module.scss';
import cn from 'classnames';
import { FC, useContext, useRef, useState } from 'react';
import { DeskInfoContext } from '../../contexts/deskInfo.context';

type DeskCreationProps = {
    className?: string;
    setIsCreationOpened: (isCreationOpened: boolean) => void;
};

export const DeskCreation: FC<DeskCreationProps> = ({
    className,
    setIsCreationOpened,
}) => {
    const colorsStyles = ['red', 'yellow', 'blue', 'pink', 'purple'];

    const { setDeskName, setAccess, setColor } = useContext(DeskInfoContext);

    const [deskColor, setDeskColor] = useState<string>('default');
    const [isDeskNameError, setIsDeskNameError] = useState<boolean>(false);
    const [isAccessTypeError, setIsAccessTypeError] = useState<boolean>(false);

    const accessTypeRef = useRef<HTMLSelectElement>(null);
    const deskNameRef = useRef<HTMLInputElement>(null);

    const setDeskParams = () => {
        if (deskNameRef.current?.value && accessTypeRef.current?.value) {
            if (setDeskName && setAccess && setColor) {
                setDeskName(deskNameRef.current?.value);
                setAccess(accessTypeRef.current?.value);
                setColor(deskColor);
                setIsCreationOpened(false);
            }
        } else {
            if (!deskNameRef.current?.value) {
                setIsDeskNameError(true);
            } else {
                setIsDeskNameError(false);
            }
            if (!accessTypeRef.current?.value) {
                setIsAccessTypeError(true);
            } else {
                setIsAccessTypeError(false);
            }
        }
    };

    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={cn(styles.deskInfo, styles[deskColor])}>
                <div className={styles.inputContainer}>
                    <input
                        ref={deskNameRef}
                        type="text"
                        placeholder="Desk name"
                    />
                    {isDeskNameError && (
                        <span className={styles.error}>
                            Please, type desk name
                        </span>
                    )}
                </div>
                <div className={styles.selectContainer}>
                    <select
                        ref={accessTypeRef}
                        name="access-type"
                        id="access-type"
                    >
                        <option value="">---</option>
                        <option value="public">public</option>
                        <option value="private">private</option>
                    </select>
                    {isAccessTypeError && (
                        <span className={styles.error}>
                            Please, point type of access
                        </span>
                    )}
                </div>
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
                <button className={deskColor} onClick={setDeskParams}>
                    Create Desk
                </button>
            </div>
        </div>
    );
};
