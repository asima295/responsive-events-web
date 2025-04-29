const track = document.getElementById('carouselTrack');
const itemWidth = 300;
let position = 0;

function moveSlide(direction) {
    const maxScroll = track.scrollWidth - track.clientWidth;
    position += direction * itemWidth;

    if (position < 0) position = 0;
    if (position > maxScroll) position = maxScroll;

    track.style.transform = `translateX(-${position}px)`;
}




const testimonials = [
    {
        text: "Planning a big event can be overwhelming, but EventHorizon made it so easy. They handled everything with precision and creativity, leaving us free to enjoy the day. Highly recommend!",
        name: "Sophia L."
    },
    {
        text: "Thanks to EventHorizon, our corporate event went off without a hitch. Their attention to detail and professional staff made all the difference!",
        name: "Michael B."
    },
    {
        text: "The decorations were stunning and the schedule was perfectly managed. Everyone is still talking about how great everything looked!",
        name: "Emily R."
    }
];

let currentIndex = 0;

function updateTestimonial(index) {
    document.getElementById("testimonial").textContent = testimonials[index].text;
    document.getElementById("client-name").textContent = testimonials[index].name;
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}