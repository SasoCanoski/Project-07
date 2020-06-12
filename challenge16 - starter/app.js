$(function () {
	$(".btn1").click(function () {
		$(".btn1").prop('disabled', true);
		$(".btn2").prop('disabled', true);

		var carWidth = $('.car1').width();
		var raceTrackWidth = $(window).width() - carWidth;
		var place = undefined;
		var minSpeed = 1000;
		var speed1 = Math.floor(minSpeed + Math.random() * 1000)
		var speed2 = Math.floor(minSpeed + Math.random() * 1000)

		$(".car1").delay(4000).animate({ marginLeft: raceTrackWidth }, speed1, function () {
			$(".btn1").prop('disabled', false);
			$(".btn2").prop('disabled', false);
			$(".img2").show();
			checkPlace()
			$(".img-track").animate({ opacity: "0.3" })
			$(" .tb1").prepend(`<tr class="one"><td>Finished in: <span class="span1">${place}</span> place with a  time  of: <span class="span1"> ${speed1}</span> milliseconds</td></tr>`)
		})

		$(".car2").delay(4000).animate({ marginLeft: raceTrackWidth }, speed2, function () {
			$(".btn1").prop('disabled', false);
			$(".btn2").prop('disabled', false);
			$(".img2").show();
			checkPlace()
			$(".img-track").animate({ opacity: "0.3" })
			$(" .tb2").prepend(`<tr class="two"><td>Finished in: <span class="span2">${place1}</span> place with a  time  of:  <span class="span2">${speed2}</span> milliseconds</td></tr>`)
		})

		$(".img-track").animate({ opacity: "0.3" }).delay(3500).animate({ opacity: "1" })

		function startTimer() {
			if (count === 0) {
				clearInterval(timer);
				endCount();
			} else {
				$(".timer").css({ display: "block", color: "white", zIndex: "1" })
				$('.timer').html(count);
				count--;
			}
		}

		var count = 3;
		var timer = setInterval(function () { startTimer(count); }, 1000);

		function checkPlace() {
			if (speed1 < speed2) {
				place = "first"
				place1 = "second"
			} else {
				place = "second"
				place1 = "first"
			}
		}

		function endCount() {
			$(".timer").css("display", "none")
		}
	})

	$(".btn2").click(function () {
		$(".car1").css({ marginLeft: " 0px" })
		$(".car2").css({ marginLeft: " 0px" })
		$(".img2").hide();
		$(".img-track").animate({ opacity: "1" })
	})

	if (localStorage.getItem("set")) {
		$(".table3").append(` <table>
		<thead>
		  <tr>
			<th class="th-1">
			  Results from previous time you played this game:
			</th>
		  </tr>
		</thead>
		<tbody class="tb-3">
		<tr>${localStorage.getItem("set")}</tr>
		<tr>${localStorage.getItem("set1")}</tr>
		</tbody>
	  </table>`)
	}

	$(window).on('beforeunload', function () {
		localStorage.setItem("set", $(".one").eq(0).html().toString());
		localStorage.setItem("set1", $(".two").eq(0).html().toString());
	});
});

