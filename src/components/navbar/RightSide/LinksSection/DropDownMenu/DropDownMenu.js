import styles from './DropDownMenu.module.css';
import DropDownItem from "@/components/navbar/RightSide/LinksSection/DropDownMenu/DropDownItem";

export default function DropDownMenu({title, items}) {

    return (
        <li className={styles.dropdown}>
            <button>{title}</button>
            <div className={styles.dropdownContent}>
                <div className={styles.glow}></div>
                {items.map((item, index) => (
                    <DropDownItem key={index} label={item.label} link={item.link} icon={item.icon} logo={item.logo}/>
                ))}
            </div>
        </li>
    );
};