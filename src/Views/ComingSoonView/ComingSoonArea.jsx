import React from 'react'

const ComingSoonArea = () => {
    // Count Time JS
    function makeTimer() {
        var endTime = new Date("November 30, 2023 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        document.querySelector("#days").innerHTML = days + "<span>Days</span>";
        document.querySelector("#hours").innerHTML = hours + "<span>Hours</span>";
        document.querySelector("#minutes").innerHTML = minutes + "<span>Minutes</span>";
        document.querySelector("#seconds").innerHTML = seconds + "<span>Seconds</span>";
    }
    setInterval(function () { makeTimer(); }, 300);

    return (



        <div class="coming-soon-area ptb-100">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="coming-soon-content">
                        <a href="index.html" class="logo">
                            <img src="assets/images/logo.png" alt="image" />
                        </a>
                        <h2>We Are Launching Soon</h2>
                        <div id="timer" class="flex-wrap d-flex justify-content-center">
                            <div id="days" class="align-items-center flex-column d-flex justify-content-center"></div>
                            <div id="hours" class="align-items-center flex-column d-flex justify-content-center"></div>
                            <div id="minutes" class="align-items-center flex-column d-flex justify-content-center"></div>
                            <div id="seconds" class="align-items-center flex-column d-flex justify-content-center"></div>
                        </div>
                        <form class="newsletter-form" data-bs-toggle="validator">
                            <div class="form-group has-error">
                                <input type="email" class="form-control" placeholder="Enter your email" name="EMAIL" required="" autocomplete="off" />
                            </div>
                            <button type="submit" class="default-btn common-btn">Subscribe Now</button>
                            <div id="validator-newsletter" class="form-result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoonArea