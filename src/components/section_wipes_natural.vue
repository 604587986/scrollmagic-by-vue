<template>
	<div style="width:100%;height:100%">
		<div class="public-page-header">section_wipes_natural</div>
		<div class="demo">
			<section class="panel blue">
				<b>ONE</b>
			</section>
			<section class="panel turqoise">
				<b>TWO</b>
			</section>
			<section class="panel green">
				<b>THREE</b>
			</section>
			<section class="panel bordeaux">
				<b>FOUR</b>
			</section>
		</div>
	</div>
</template>
<script>
export default {
	mounted() {
		// init
		let controller;
		this.controller = controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: "onLeave",
				duration: "100%" // this works just fine with duration 0 as well
			}
		});

		// get all slides
		let slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (let i = 0; i < slides.length; i++) {
			this.mixinScenes[i] = new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
				.setPin(slides[i], { pushFollowers: false })
				.addTo(controller);
		}
	},
	destroyed() {
		this.controller.destroy();
	}
};
</script>
<style lang="less">
.demo {
	height: 100%;
	width: 100%;
	.panel {
		height: 100%;
		width: 100%;
		color: #fff;
		text-align: center;
		font-size: 50px;
		line-height: 100vh;
		&.blue {
			background: blue;
		}
		&.turqoise {
			background: #38ced7;
		}
		&.green {
			background: green;
		}
		&.bordeaux {
			background: #953543;
		}
	}
}
</style>
