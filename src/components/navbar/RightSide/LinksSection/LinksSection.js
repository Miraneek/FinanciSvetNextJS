import DropDownMenu from "@/components/navbar/RightSide/LinksSection/DropDownMenu/DropDownMenu";
import styles from "./LinksSection.module.css";
import {menuItems} from "@/clanky";
export default function LinksSection() {



    return (
        <section className={styles.linksSection}>
            <ul>
                {menuItems.map((menuItem, index) => (
                    <DropDownMenu
                        key={index}
                        title={menuItem.title}
                        items={menuItem.items}
                    />
                ))}
            </ul>
        </section>
    )
}