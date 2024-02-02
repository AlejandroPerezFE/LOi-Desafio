const BASE_URL =
	"https://loi.com.uy/index.php?ctrl=index&act=categoriasDestacadas";

export const fetchData = async () => {
	const response = await fetch(BASE_URL);

	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	return response.json();
};
