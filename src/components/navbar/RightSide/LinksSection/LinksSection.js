import DropDownMenu from "@/components/navbar/RightSide/LinksSection/DropDownMenu/DropDownMenu";
import styles from "./LinksSection.module.css";
export default function LinksSection() {
    const menuItems = [
        {
            title: 'Brigády',
            items: [
                {
                    label: 'Kde hledat brigádu',
                    link: '/clanky/Kde-hledat-brigadu',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-map',
                        stroke: '#00b341',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13"/>
                                <path d="M9 4v13"/>
                                <path d="M15 7v13"/>
                            </>
                        ),
                    },
                },
                {
                    label: 'Podepsání smlouvy',
                    link: '#',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-pencil-question',
                        stroke: '#00b341',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 20l6 -6l3 -3l1.5 -1.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4z"/>
                                <path d="M13.5 6.5l4 4"/>
                                <path d="M19 22v.01"/>
                                <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>
                            </>
                        ),
                    },
                },
                {
                    label: 'Co je to růžový papír',
                    link: ' #',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-news',
                        stroke: '#fd0061',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"/>
                                <path d="M8 8l4 0"/>
                                <path d="M8 12l4 0"/>
                                <path d="M8 16l4 0"/>
                            </>
                        ),
                    },
                },
                {
                    label: 'Jak na pohovor',
                    link: '#',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-users',
                        stroke: '#00b341',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
                            </>
                        ),
                    },
                },
            ],
        },
        {
            title: 'Daně',
            items: [
                {
                    label: 'Druhy daní',
                    link: '#',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-businessplan',
                        stroke: '#00b341',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0"/>
                                <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"/>
                                <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"/>
                                <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"/>
                                <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"/>
                                <path d="M5 15v1m0 -8v1"/>
                            </>
                        ),
                    },
                },
                {
                    label: 'Jak zaplatit daně',
                    link: '#',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-wallet',
                        stroke: '#00b341',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"/>
                                <path d="M14 12v4h-4a2 2 0 0 1 0 -4h4"/>
                            </>
                        ),
                    },
                },
            ],
        },
        {
            title: 'Investice',
            items: [
                {
                    label: 'Spořící účet',
                    link: '#',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-building-bank',
                        stroke: '#00b341',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 21l18 0"/>
                                <path d="M3 10l18 0"/>
                                <path d="M5 6l7 -3l7 3"/>
                                <path d="M4 10l0 11"/>
                                <path d="M20 10l0 11"/>
                                <path d="M8 14l0 3"/>
                                <path d="M12 14l0 3"/>
                                <path d="M16 14l0 3"/>
                            </>
                        ),
                    },
                },
                {
                    label: 'Investování do akcii',
                    link: '#',
                    icon: {
                        className: 'icon icon-tabler icon-tabler-file-dollar',
                        stroke: '#00b341',
                        path: (
                            <>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
                                <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"/>
                                <path d="M12 17v1m0 -8v1"/>
                            </>
                        ),
                    },
                },
                {
                    label: 'Trading 212',
                    link: '#',
                    logo: '/nawbar/Trading212.png',
                },
                {
                    label: 'Etoro',
                    link: '#',
                    logo: '/nawbar/Etoro.png',
                },
            ],
        },
    ];


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