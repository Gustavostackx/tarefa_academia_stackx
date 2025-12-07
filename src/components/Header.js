import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Academia StackX</h1>
        <nav style={styles.nav}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#planos" style={styles.link}>Planos</a>
          <a href="#contato" style={styles.link}>Contato</a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: { background: "#111", color: "#fff", padding: "12px 0" },
  container: { width: "90%", maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { color: "#E50914", margin: 0 },
  nav: {},
  link: { color: "#fff", marginLeft: 20, textDecoration: "none" }
};
