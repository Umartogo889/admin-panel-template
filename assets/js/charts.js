

// =========== chart one start
const ctx1 = document.getElementById("Chart1").getContext("2d");
const chart1 = new Chart(ctx1, {
    type: "line",
    data: {
        labels: [
            "Jan",
            "Fab",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "",
                backgroundColor: "transparent",
                borderColor: "#365CF5",
                data: [
                    600, 800, 750, 880, 940, 880, 900, 770, 920, 890, 976, 1100,
                ],
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: "#365CF5",
                pointBorderColor: "transparent",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 5,
                borderWidth: 5,
                pointRadius: 8,
                pointHoverRadius: 8,
                cubicInterpolationMode: "monotone", // Add this line for curved line
            },
        ],
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    labelColor: function (context) {
                        return {
                            backgroundColor: "#ffffff",
                            color: "#171717",
                        };
                    },
                },
                intersect: false,
                backgroundColor: "#f9f9f9",
                title: {
                    fontFamily: "Plus Jakarta Sans",
                    color: "#8F92A1",
                    fontSize: 12,
                },
                body: {
                    fontFamily: "Plus Jakarta Sans",
                    color: "#171717",
                    fontStyle: "bold",
                    fontSize: 16,
                },
                multiKeyBackground: "transparent",
                displayColors: false,
                padding: {
                    x: 30,
                    y: 10,
                },
                bodyAlign: "center",
                titleAlign: "center",
                titleColor: "#8F92A1",
                bodyColor: "#171717",
                bodyFont: {
                    family: "Plus Jakarta Sans",
                    size: "16",
                    weight: "bold",
                },
            },
            legend: {
                display: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false,
                },
                ticks: {
                    padding: 35,
                    max: 1200,
                    min: 500,
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    color: "rgba(143, 146, 161, .1)",
                    zeroLineColor: "rgba(143, 146, 161, .1)",
                },
                ticks: {
                    padding: 20,
                },
            },
        },
    },
});
// =========== chart one end
// =========== chart two start
const ctx2 = document.getElementById("Chart2").getContext("2d");
const chart2 = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: [
            "Jan",
            "Fab",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "",
                backgroundColor: "#365CF5",
                borderRadius: 30,
                barThickness: 6,
                maxBarThickness: 8,
                data: [
                    600, 700, 1000, 700, 650, 800, 690, 740, 720, 1120, 876, 900,
                ],
            },
        ],
    },
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    titleColor: function (context) {
                        return "#8F92A1";
                    },
                    label: function (context) {
                        let label = context.dataset.label || "";

                        if (label) {
                            label += ": ";
                        }
                        label += context.parsed.y;
                        return label;
                    },
                },
                backgroundColor: "#F3F6F8",
                titleAlign: "center",
                bodyAlign: "center",
                titleFont: {
                    size: 12,
                    weight: "bold",
                    color: "#8F92A1",
                },
                bodyFont: {
                    size: 16,
                    weight: "bold",
                    color: "#171717",
                },
                displayColors: false,
                padding: {
                    x: 30,
                    y: 10,
                },
            },
        },
        legend: {
            display: false,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false,
                },
                ticks: {
                    padding: 35,
                    max: 1200,
                    min: 0,
                },
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                    color: "rgba(143, 146, 161, .1)",
                    drawTicks: false,
                    zeroLineColor: "rgba(143, 146, 161, .1)",
                },
                ticks: {
                    padding: 20,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    },
});
// =========== chart two end
