import styles from './DeskCreation.module.scss';
import cn from 'classnames';
import { FC, useState } from 'react';

type DeskCreationProps = {
    className?: string;
}

export const DeskCreation: FC<DeskCreationProps> = ({ className }) => {
    const colorsStyles = [styles.red, styles.yellow, styles.blue, styles.pink, styles.purple];
    const [deskColor, setDeskColor] = useState<string>(styles.white);

    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={cn(styles.deskInfo, deskColor)}>
                <input type="text" placeholder="Desk name" />
                <select name="access-type" id="access-type">
                    <option value="private">private
                    </option>
                    <option value="public">public
                    </option>
                </select>
            </div>
            <div className={styles.color}>
                {colorsStyles.map((c) => (
                    <button
                        className={cn(c, styles.colorButton)}
                        key={c}
                        onClick={() => setDeskColor(c)}
                    ></button>
                ))}
            </div>
            <div className={styles.createButton}>
                <button className={deskColor}>Create Desk</button>
            </div>
        </div>
    );
};