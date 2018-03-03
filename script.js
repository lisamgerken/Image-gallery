(function() {
	const imageArray = ["https://instagram.ford4-1.fna.fbcdn.net/vp/ce8e3ccdcae2dcda801d5c5ca69650e4/5B31344F/t51.2885-15/e35/25021422_215631845648905_2982603540075118592_n.jpg", "https://instagram.ford4-1.fna.fbcdn.net/vp/47a5a7e3a1ed8b0afd6f9c9171877b83/5B14B04D/t51.2885-15/s640x640/sh0.08/e35/18580298_255188938222251_3334367752528855040_n.jpg", "https://instagram.ford4-1.fna.fbcdn.net/vp/2d5f7aca4fa8ea3a19e5351e8363e2b1/5B2EB134/t51.2885-15/s640x640/sh0.08/e35/16789080_703104179868877_3407307356755722240_n.jpg"];

	let index = 0;
	const barkButton = document.getElementById("barkButton");
	const funnyBarkley = document.getElementById("funnyBarkley");
	funnyBarkley.src = imageArray[index];

	function handleBarkButtonClick() {
		if (imageArray.length - 1 === index) {
			index = 0;
		} else {
			index++;
		}
		funnyBarkley.src = imageArray[index];	
	}
	barkButton.onclick = handleBarkButtonClick;

})();
