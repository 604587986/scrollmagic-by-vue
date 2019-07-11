<template>
	<div style="width:100%;height:100%">
		<div class="public-page-header">bezier_path_animation</div>
		<div class="demo">
			<div class="spacer s2"></div>
			<div class="spacer s0" id="trigger"></div>
			<div id="target">
				<img src="@/assets/img/example_bezier.png" alt id="plane" />
			</div>
			<div class="spacer s2"></div>
		</div>
		<div class="spacer s_viewport"></div>
	</div>
</template>
<script>
export default {
	mounted() {
		// init controller
		let controller;
		this.controller = controller = new ScrollMagic.Controller();

		let flightpath = {
			entry: {
				curviness: 1.25,
				autoRotate: true,
				values: [{ x: 100, y: -20 }, { x: 300, y: 10 }]
			},
			looping: {
				curviness: 1.25,
				autoRotate: true,
				values: [
					{ x: 510, y: 60 },
					{ x: 620, y: -60 },
					{ x: 500, y: -100 },
					{ x: 380, y: 20 },
					{ x: 500, y: 60 },
					{ x: 580, y: 20 },
					{ x: 620, y: 15 }
				]
			},
			leave: {
				curviness: 1.25,
				autoRotate: true,
				values: [
					{ x: 660, y: 20 },
					{ x: 800, y: 130 },
					{ x: document.body.clientWidth + 300, y: -100 }
				]
			}
		};

		let tween = new TimelineMax()
			.add(
				TweenMax.to("#plane", 1.2, {
					css: { bezier: flightpath.entry },
					ease: Power1.easeInOut
				})
			)
			.add(
				TweenMax.to("#plane", 2, {
					css: { bezier: flightpath.looping },
					ease: Power1.easeInOut
				})
			)
			.add(
				TweenMax.to("#plane", 1, {
					css: { bezier: flightpath.leave },
					ease: Power1.easeInOut
				})
			);

		let scene = new ScrollMagic.Scene({
			triggerElement: "#trigger",
			duration: 900,
		})
			.setPin("#target")
			.setTween(tween)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	},
	destroyed() {
		this.controller.destroy();
	}
};
</script>
<style lang="less">
#plane {
	position: absolute;
	left: -100px;
}
</style>
