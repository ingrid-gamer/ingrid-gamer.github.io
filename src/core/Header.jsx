function Header() {
  return (
    <header className="text-center p-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900">Ingrid Araya</h1>
      <h2 className="text-xl font-medium text-gray-700 mt-1">
        Ingeniería Informática
      </h2>

      <img
        src="https://i.pinimg.com/736x/ef/65/fe/ef65fef59ce57afc25c19c5f86e182b3.jpg"
        alt="Foto de perfil"
        width="200"
        className="mx-auto mt-4 rounded-full shadow-md"
      />

      <p className="mt-4 text-gray-700">
        Estudiante de segundo año de Ingeniería Informática.
      </p>

      <img
        src="https://i.pinimg.com/736x/d3/d3/0a/d3d30ac92c918ded282265690f53268f.jpg"
        alt="Separador decorativo"
        width="300"
        className="mx-auto mt-4"
      />
    </header>
  );
}

export default Header;