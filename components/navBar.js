"use client"

import Link from "next/link"

export default function NavBar({ isAdmin }){
    const publicLinks = [
        { href:"/", label: "Home" },
        { href:"/clientes", label: "Cadastro de clientes" },
        { href:"/contato", label: "Contato  " }
       
    ];

    const adminLinks = [
        { href:"/", label: "Home" },
        { href:"/clientes", label: "Cadastro de clientes" },
        { href:"/contato", label: "Contato" },
        { href:"/leads", label: "Relatorio de leads" },
        { href:"/produtos", label: "Cadastro de produtos" }
    ]
    return(
        <nav>
            {!isAdmin&& publicLinks.map((link) =>(
                <Link key = {link.href} href ={link.href}> {link.label}</Link>
            ))}
            {isAdmin && adminLinks.map((link)=>(
                <Link key ={link.href} href ={link.href}>{link.label}</Link>
            ))}
        </nav>
    )
}