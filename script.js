(function() {
	const imageArray = ["https://instagram.ford4-1.fna.fbcdn.net/vp/ce8e3ccdcae2dcda801d5c5ca69650e4/5B31344F/t51.2885-15/e35/25021422_215631845648905_2982603540075118592_n.jpg", "https://instagram.ford4-1.fna.fbcdn.net/vp/47a5a7e3a1ed8b0afd6f9c9171877b83/5B14B04D/t51.2885-15/s640x640/sh0.08/e35/18580298_255188938222251_3334367752528855040_n.jpg", "https://instagram.ford4-1.fna.fbcdn.net/vp/2d5f7aca4fa8ea3a19e5351e8363e2b1/5B2EB134/t51.2885-15/s640x640/sh0.08/e35/16789080_703104179868877_3407307356755722240_n.jpg"];

	const imageArray2 = ["https://scontent-ort2-1.cdninstagram.com/vp/3883a798e1600e8b76d10ad571a3f0e1/5B304974/t51.2885-15/s640x640/sh0.08/e35/25009744_2020221564912774_1898475213843070976_n.jpg", "https://scontent-atl3-1.cdninstagram.com/vp/d9372c7f865b5fe34eb5c98ccba34ab7/5B34D162/t51.2885-15/s640x640/sh0.08/e35/22580250_138565466890389_8839369228646612992_n.jpg", "https://scontent-atl3-1.cdninstagram.com/vp/d97a0fd345ac71ab8a393b7ffb16bbe9/5B2BAFA7/t51.2885-15/s640x640/sh0.08/e35/21148961_1797200123641344_1905519789137199104_n.jpg"];

	let index = 0;
	const barkButton = document.getElementById("barkButton");
	const funnyBarkley = document.getElementById("funnyBarkley");
	const inputBar = document.getElementById("inputHandler");
	const addButton = document.getElementById("addButton");
	const imageIndex = document.getElementById("imageIndex");

	const pDotButton = document.getElementById("pDotButton");
	const inputBar2 = document.getElementById("inputHandler2");
	const addButton2 = document.getElementById("addButton2");

	imageIndex.innerHTML = index + 1;

	funnyBarkley.src = imageArray[index];
	pDotPics.src = imageArray2[index];

	function handleBarkButtonClick() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		funnyBarkley.src = imageArray[index];
		imageIndex.innerHTML = index + 1;	
	}
	barkButton.onclick = handleBarkButtonClick;

	function handlePDotButtonClick() {
		if (imageArray2.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		pDotPics.src = imageArray2[index];
	}
	pDotButton.onclick = handlePDotButtonClick;

	function handleAddButtonClick() {
		imageArray.push(inputBar.value);
		inputBar.value = "";
	}
	addButton.onclick = handleAddButtonClick;

	function handleAddButton2Click() {
		imageArray2.push(inputHandler2.value);
		inputBar2.value = "";
	}
	addButton2.onclick = handleAddButton2Click;

})();

