function status(request, response) {
  response.status(200).json({ teste: "Aula curso.dev" });
}

export default status;
