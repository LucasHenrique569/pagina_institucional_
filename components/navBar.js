"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";


export default function NavBar({ isAdmin }) {
    const publicLinks = [
        { href: "/", label: "Home" },
        { href: "/clientes", label: "Cadastro de clientes" },
        { href: "/contato", label: "Contato" }
    ];

    const adminLinks = [
        { href: "/", label: "Home" },
        { href: "/clientes", label: "Cadastro de clientes" },
        { href: "/contato", label: "Contato" },
        { href: "/leads", label: "Relatório de leads" },
        { href: "/cadastroProdutos", label: "Cadastro de produtos" }
    ];

    return (
        <nav className="navBar">
            <div className="navLogo">

                <Image
                    src="/assets/logo.jpg"
                    alt="Logo"
                    width={400}
                    height={400}
                    className="navLogo"
                />
            </div>

            <div className="navLinks">
                {!isAdmin &&
                    publicLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="navButton">
                            {link.label}
                        </Link>
                    ))}

                {isAdmin &&
                    adminLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="navButton">
                            {link.label}
                        </Link>
                    ))}
            </div>
        </nav>
    );
}