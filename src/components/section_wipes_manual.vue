<template>
	<div style="width:100%;height:100%">
		<div class="public-page-header">section_wipes_manual</div>
		<div class="demo">
			<div id="pinContainer">
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
				<section class="panel yellow">
					<b>FIVE</b>
				</section>
				<section class="panel pink">
					<b>SIX</b>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {};
	},
	props: {
		msg: String
	},
	mounted() {
		let controller;
		this.controller = controller = new ScrollMagic.Controller();
		// define movement of panels
		let wipeAnimation = new TimelineMax()
			.fromTo(
				"section.panel.turqoise",
				1,
				{ x: "-100%" },
				{ x: "0%", ease: Linear.easeNone }
			)
			.fromTo(
				"section.panel.green",
				1,
				{ x: "100%" },
				{ x: "0%", ease: Linear.easeNone }
			)
			.fromTo(
				"section.panel.bordeaux",
				1,
				{ y: "-100%" },
				{ y: "0%", ease: Linear.easeNone }
			)
			.fromTo(
				"section.panel.yellow",
				1,
				{ y: "-100%", x: "-100%" },
				{ y: "0%", x: "0%", ease: Linear.easeNone }
			)
			.fromTo(
				"section.panel.pink",
				1,
				{ scale: 0 },
				{ scale: 1, ease: Linear.easeNone }
			);

		// create scene to pin and link animation
		let scene = new ScrollMagic.Scene({
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "400%"
		})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addTo(controller);

			this.mixinScenes.push(scene)
	},
	destroyed() {
		this.controller.destroy();
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.demo {
	width: 100%;
	height: 100%;
	background-image: none;
}
#pinContainer {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.panel {
	height: 100%;
	width: 100%;
	position: absolute;
	background-color: #ffffff;
	line-height: 100vh;
	text-align: center;
	color: #ffffff;
	font-size: 40px;
	&.blue {
		background-color: #3883d8;
	}
	&.green {
		background-color: #22d659;
	}
	&.turqoise {
		background-color: #38ced7;
	}
	&.bordeaux {
		background-color: #953543;
	}
	&.yellow {
		background-color: yellow;
	}
	&.pink {
		background-color: pink;
	}
}
</style>