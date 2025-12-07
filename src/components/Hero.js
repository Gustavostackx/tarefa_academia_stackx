function Hero() {
  return (
    <section style={styles.hero}>
      <h2 style={styles.title}>Seu treino começa aqui!</h2>
      <p style={styles.subtitle}>Resultado, foco e evolução todos os dias.</p>
      <button style={styles.button}>Conheça nossos planos</button>
    </section>
  );
}

const styles = {
  hero: {
    width: "100%",
    height: "400px",
    backgroundImage: "url('/images/Imagem_Academia_stackx.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#E50914",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Hero;
