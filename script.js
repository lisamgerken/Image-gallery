(function() {
	const secondImage = "https://instagram.ford4-1.fna.fbcdn.net/vp/47a5a7e3a1ed8b0afd6f9c9171877b83/5B14B04D/t51.2885-15/s640x640/sh0.08/e35/18580298_255188938222251_3334367752528855040_n.jpg";

	const firstImage = "https://instagram.ford4-1.fna.fbcdn.net/vp/ce8e3ccdcae2dcda801d5c5ca69650e4/5B31344F/t51.2885-15/e35/25021422_215631845648905_2982603540075118592_n.jpg";

	const barkButton = document.getElementById("barkButton");
	const funnyBarkley = document.getElementById("funnyBarkley");

	function handleBarkButtonClick() {
		if(funnyBarkley.src === secondImage) {
			funnyBarkley.src = firstImage;
		} else {
			funnyBarkley.src = secondImage;
		}
	}
	barkButton.onclick = handleBarkButtonClick;

})();

