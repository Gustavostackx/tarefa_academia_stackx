function Planos() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Planos</h2>

      <div style={styles.cards}>
        
        <div className="plan-card" style={styles.card}>
          <h3>Mensal</h3>
          <p>Treine quando quiser.</p>
          <strong>R$ 89,90</strong>
        </div>

        <div className="plan-card" style={styles.card}>
          <h3>Trimestral</h3>
          <p>Compromisso com o treino.</p>
          <strong>R$ 229,90</strong>
        </div>

        <div className="plan-card" style={styles.card}>
          <h3>Anual</h3>
          <p>Melhor custo-benefício.</p>
          <strong>R$ 699,90</strong>
        </div>

      </div>
    </section>
  )
}

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center"
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px"
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  card: {
    backgroundColor: "#111",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    transition: "0.3s",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)"
  }
}

export default Planos;
