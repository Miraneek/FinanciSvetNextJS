"use client"
import DropDownMenu from "@/components/navbar/RightSide/LinksSection/DropDownMenu/DropDownMenu";
import styles from "./LinksSection.module.css";
import {menuItems} from "@/clanky";
export default function LinksSection({isSearching}) {

    return (
        <section className={styles.linksSection}>
            <ul className={isSearching ? styles.links : ""}>
                {
                    menuItems.map((menuItem, index) => (
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