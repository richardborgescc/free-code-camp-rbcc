# Data Visualization Certification
## [Data Visualization with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/)

1. [Add Document Elements with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-document-elements-with-d3)
    ```html
    <body>
        <script>
        // Add your code below this line
        d3.select('body')
        .append('h1')
        .text('Learning D3');
        // Add your code above this line
        </script>
    </body>
    ```
1. [Select a Group of Elements with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/select-a-group-of-elements-with-d3)
    ```html
    <body>
        <ul>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
        </ul>
        <script>
        // Add your code below this line
        d3.selectAll('li')
            .text('list item');
        // Add your code above this line
        </script>
    </body>
    ```
1. [Work with Data in D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/work-with-data-in-d3)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
        // Add your code below this line
        d3.select('body')
            .selectAll('h2')
            .data(dataset)
            .enter()
            .append('h2')
            .text('New Title')
        // Add your code above this line
        </script>
    </body>
    ```
1. [Work with Dynamic Data in D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/work-with-dynamic-data-in-d3)
    ```html
    <body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            // Add your code below this line
            .text((d) => d + ' USD');
            // Add your code above this line
    </script>
    </body>
    ```
1. [Add Inline Styling to Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-inline-styling-to-elements)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text((d) => (d + " USD"))
            // Add your code below this line
            .style('font-family', 'verdana');
            // Add your code above this line
        </script>
    </body>
    ```
1. [Change Styles Based on Data](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-styles-based-on-data)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text((d) => (d + " USD"))
            // Add your code below this line
            .style('color', (d) => {
                if (d < 20) {
                    return 'red'
                }
                return 'green';
            });
            // Add your code above this line
        </script>
    </body>
    ```
1. [Add Classes with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-classes-with-d3)
    ```html
    <style>
    .bar {
        width: 25px;
        height: 100px;
        display: inline-block;
        background-color: blue;
    }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            // Add your code below this line
            .attr('class', 'bar');
            // Add your code above this line
        </script>
    </body>
    ```
1. [Update the Height of an Element Dynamically](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/update-the-height-of-an-element-dynamically)
    ```html
    <style>
    .bar {
        width: 25px;
        height: 100px;
        display: inline-block;
        background-color: blue;
    }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            // Add your code below this line
            .style('height', (d) => { return d + 'px'});
            // Add your code above this line
        </script>
    </body>
    ```
1. [Change the Presentation of a Bar Chart](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-the-presentation-of-a-bar-chart)
    ```html
    <style>
        .bar {
            width: 25px;
            height: 100px;
            /* Add your code below this line */
            margin: 2px;
            /* Add your code above this line */
            display: inline-block;
            background-color: blue;
        }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            // Add your code below this line
            .style("height", (d) => (10 * d + "px"))
            // Add your code above this line
        </script>
    </body>
    ```
1. [Learn About SVG in D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/learn-about-svg-in-d3)
    ```html
    <style>
    svg {
        background-color: pink;
    }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        // Add your code below this line
                        .append('svg')
                        .attr('width', w)
                        .attr('height', h);
                        // Add your code above this line
        </script>
    </body>
    ```
1. [Display Shapes with SVG](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/display-shapes-with-svg)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h)
                        // Add your code below this line
                        .append('rect')
                        .attr('x', 0)
                        .attr('y', 0)
                        .attr('width', 25)
                        .attr('height', 100);
                        // Add your code above this line
        </script>
    </body>
    ```
1. [Create a Bar for Each Data Point in the Set](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/create-a-bar-for-each-data-point-in-the-set)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            // Add your code below this line
            .data(dataset)
            .enter()
            .append('rect')
            // Add your code above this line
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", 100);
        </script>
    </body>
    ```
1. [Dynamically Set the Coordinates for Each Bar](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/dynamically-set-the-coordinates-for-each-bar)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => {
                // Add your code below this line
                return i * 30;
                // Add your code above this line
            })
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", 100);
        </script>
    </body>
    ```
1. [Dynamically Change the Height of Each Bar](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/dynamically-change-the-height-of-each-bar)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", (d, i) => {
            // Add your code below this line
                return d *3;
            // Add your code above this line
            });
        </script>
    </body>
    ```
1. [Invert SVG Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/invert-svg-elements)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => {
            // Add your code below this line
            return h - d * 3;
            // Add your code above this line
            })
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d);
        </script>
    </body>
    ```
1. [Change the Color of an SVG Element](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-the-color-of-an-svg-element)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d)
            // Add your code below this line
            .attr('fill', 'navy')
            // Add your code above this line
        </script>
    </body>
    ```
1. [Add Labels to D3 Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-labels-to-d3-elements)
    ```html
    <body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 30)
        .attr("y", (d, i) => h - 3 * d)
        .attr("width", 25)
        .attr("height", (d, i) => 3 * d)
        .attr("fill", "navy");

        svg.selectAll("text")
        .data(dataset)
        .enter()
        // Add your code below this line
        .append('text')
        .attr("x", (d, i) => i * 30)
        .attr("y", (d, i) => h - 3 * d - 3)
        .text((d) => d)
        // Add your code above this line
    </script>
    <body>
    ```
1. [Style D3 Labels](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/style-d3-labels)
    ```html
    <body>
        <script>
            const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

            const w = 500;
            const h = 100;

            const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => d * 3)
            .attr("fill", "navy");

            svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (3 * d) - 3)
            // Add your code below this line
            .style('font-size', '25px')
            .attr('fill', 'red');
            // Add your code above this line
        </script>
    </body>
    ```
1. [Add a Hover Effect to a D3 Element](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-a-hover-effect-to-a-d3-element)
    ```html
    <style>
    .bar:hover {
            fill: brown;
    }
    </style>
    <body>
        <script>
            const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

            const w = 500;
            const h = 100;

            const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d)
            .attr("fill", "navy")
            // Add your code below this line
            .attr("class", "bar");
            // Add your code above this line

            svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (3 * d) - 3);

        </script>
    </body>
    ```
1. [Add a Tooltip to a D3 Element](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-a-tooltip-to-a-d3-element)
    ```html
    <style>
    .bar:hover {
        fill: brown;
    }
    </style>
    <body>
        <script>
            const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

            const w = 500;
            const h = 100;

            const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => d * 3)
            .attr("fill", "navy")
            .attr("class", "bar")
            // Add your code below this line
            .append('title')
            .text((d) => d);
            // Add your code above this line

            svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (d * 3 + 3))

        </script>
    </body>
    ```
1. [Create a Scatterplot with SVG Circles](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/create-a-scatterplot-with-svg-circles)
    ```html
    <body>
        <script>
            const dataset = [
                        [ 34,    78 ],
                        [ 109,   280 ],
                        [ 310,   120 ],
                        [ 79,    411 ],
                        [ 420,   220 ],
                        [ 233,   145 ],
                        [ 333,   96 ],
                        [ 222,   333 ],
                        [ 78,    320 ],
                        [ 21,    123 ]
                        ];


            const w = 500;
            const h = 500;

            const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            svg.selectAll("circle")
            // Add your code below this line
            .data(dataset)
            .enter()
            .append("circle")
            // Add your code above this line

        </script>
    </body>
    ```
1. [Add Attributes to the Circle Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-attributes-to-the-circle-elements)
    ```html
    <body>
        <script>
        const dataset = [
                        [ 34,    78 ],
                        [ 109,   280 ],
                        [ 310,   120 ],
                        [ 79,    411 ],
                        [ 420,   220 ],
                        [ 233,   145 ],
                        [ 333,   96 ],
                        [ 222,   333 ],
                        [ 78,    320 ],
                        [ 21,    123 ]
                    ];


        const w = 500;
        const h = 500;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            // Add your code below this line
            .attr('cx', (d) => d[0])
            .attr('cy', (d) => h - d[1])
            .attr('r', 5);
            // Add your code above this line

        </script>
    </body>
    ```
1. [Add Labels to Scatter Plot Circles](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-labels-to-scatter-plot-circles)
    ```html
    <body>
        <script>
        const dataset = [
                        [ 34,    78 ],
                        [ 109,   280 ],
                        [ 310,   120 ],
                        [ 79,    411 ],
                        [ 420,   220 ],
                        [ 233,   145 ],
                        [ 333,   96 ],
                        [ 222,   333 ],
                        [ 78,    320 ],
                        [ 21,    123 ]
                    ];


        const w = 500;
        const h = 500;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", (d, i) => d[0])
            .attr("cy", (d, i) => h - d[1])
            .attr("r", 5);

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            // Add your code below this line
            .attr('y', (d) => h - d[1])
            .attr('x', (d) => d[0] + 5)
            .text((d) => d[0] + ', ' + d[1])
            // Add your code above this line
        </script>
    </body>
    ```
1. [Create a Linear Scale with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/create-a-linear-scale-with-d3)
    ```html
    <body>
        <script>
        // Add your code below this line

        const scale = d3.scaleLinear(); // Create the scale here
        const output = scale(50); // Call the scale with an argument here

        // Add your code above this line

        d3.select("body")
            .append("h2")
            .text(output);

        </script>
    </body>
    ```
1. [Set a Domain and a Range on a Scale](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/set-a-domain-and-a-range-on-a-scale)
    ```html
    <body>
        <script>
        // Add your code below this line
        const scale = d3.scaleLinear();
        scale.domain([250, 500])
            .range([10, 150]);
        // Add your code above this line
        const output = scale(50);
        d3.select("body")
            .append("h2")
            .text(output);
        </script>
    </body>
    ```
1. [Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/use-the-d3.max-and-d3.min-functions-to-find-minimum-and-maximum-values-in-a-dataset)
    ```html
    <body>
        <script>
        const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
        // Add your code below this line
        const output = d3.max(positionData, (d) => d[2]); // Change this line
        // Add your code above this line

        d3.select("body")
            .append("h2")
            .text(output)
        </script>
    </body>
    ```
1. [Use Dynamic Scales](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/use-dynamic-scales)
    ```html
    <body>
        <script>
        const dataset = [
                        [ 34,    78 ],
                        [ 109,   280 ],
                        [ 310,   120 ],
                        [ 79,    411 ],
                        [ 420,   220 ],
                        [ 233,   145 ],
                        [ 333,   96 ],
                        [ 222,   333 ],
                        [ 78,    320 ],
                        [ 21,    123 ]
                    ];

        const w = 500;
        const h = 500;

        // Padding between the SVG canvas boundary and the plot
        const padding = 30;

        // Create an x and y scale

        const xScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, (d) => d[0])])
                        .range([padding, w - padding]);

        // Add your code below this line

        const yScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, (d) => d[1])])
                        .range([h - padding, padding]);
        // Add your code above this line

        const output = yScale(411); // Returns 30
        d3.select("body")
            .append("h2")
            .text(output)
        </script>
    </body>
    ```
1. [Use a Pre-Defined Scale to Place Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/use-a-pre-defined-scale-to-place-elements)
    ```html
    <body>
        <script>
        const dataset = [
                        [ 34,     78 ],
                        [ 109,   280 ],
                        [ 310,   120 ],
                        [ 79,   411 ],
                        [ 420,   220 ],
                        [ 233,   145 ],
                        [ 333,   96 ],
                        [ 222,    333 ],
                        [ 78,    320 ],
                        [ 21,   123 ]
                    ];

        const w = 500;
        const h = 500;
        const padding = 60;

        const xScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, (d) => d[0])])
                        .range([padding, w - padding]);

        const yScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, (d) => d[1])])
                        .range([h - padding, padding]);

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            // Add your code below this line
            .attr('cx', (d) => xScale(d[0]))
            .attr('cy', (d) => yScale(d[1]))
            .attr('r', 5)
            // Add your code above this line

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) =>  (d[0] + ", "
    + d[1]))
            // Add your code below this line
            .attr('x', (d) => xScale(d[0] + 10))
            .attr('y', (d) => yScale(d[1]))
            // Add your code above this line
        </script>
    </body>
    ```
1. [Add Axes to a Visualization](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-axes-to-a-visualization)
    ```html
    <body>
        <script>
        const dataset = [
                        [ 34,     78 ],
                        [ 109,   280 ],
                        [ 310,   120 ],
                        [ 79,   411 ],
                        [ 420,   220 ],
                        [ 233,   145 ],
                        [ 333,   96 ],
                        [ 222,    333 ],
                        [ 78,    320 ],
                        [ 21,   123 ]
                    ];

        const w = 500;
        const h = 500;
        const padding = 60;

        const xScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, (d) => d[0])])
                        .range([padding, w - padding]);

        const yScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset, (d) => d[1])])
                        .range([h - padding, padding]);

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", (d) => xScale(d[0]))
            .attr("cy",(d) => yScale(d[1]))
            .attr("r", (d) => 5);

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) =>  (d[0] + "," + d[1]))
            .attr("x", (d) => xScale(d[0] + 10))
            .attr("y", (d) => yScale(d[1]))

        const xAxis = d3.axisBottom(xScale);
        // Add your code below this line
        const yAxis = d3.axisLeft(yScale);
        // Add your code above this line

        svg.append("g")
            .attr("transform", "translate(0," + (h - padding) + ")")
            .call(xAxis);

        // Add your code below this line
        svg.append("g")
            .attr("transform", "translate(" + padding + ", 0)")
            .call(yAxis);
        // Add your code above this line

        </script>
    </body>
    ```
## [JSON APIs and Ajax](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/)
1. [Handle Click Events with JavaScript using the onclick property](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/handle-click-events-with-javascript-using-the-onclick-property)
    ```html
    <script>
    document.addEventListener('DOMContentLoaded',function(){
    // Add your code below this line
    document.getElementById('getMessage').onclick = () => {

    }
    // Add your code above this line
    });
    </script>
    <style>
    body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
    }
    h1 {
    font-size: 2em;
    font-weight: bold;
    }
    .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
    }
    button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
    }
    button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
    }
    </style>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
        The message will go here
    </p>
    <p>
        <button id="getMessage">
        Get Message
        </button>
    </p>
    ```
1. [Change Text with click Events](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/change-text-with-click-events)
    ```html
    <script>
        document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('getMessage').onclick=function(){
            // Add your code below this line
            document.getElementsByClassName('message')[0].textContent="Here is the message";
            // Add your code above this line
        }
        });
    </script>
    <style>
        body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
        }
        h1 {
        font-size: 2em;
        font-weight: bold;
        }
        .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
        }
        button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
        }
        button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
        }
    </style>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
        The message will go here
    </p>
    <p>
        <button id="getMessage">
        Get Message
        </button>
    </p>
    ```
1. [Get JSON with the JavaScript XMLHttpRequest Method](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-json-with-the-javascript-xmlhttprequest-method)
    ```html
    <script>
    document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
        // Add your code below this line
        req = new XMLHttpRequest();
        req.open("GET",'/json/cats.json',true);
        req.send();
        req.onload = function(){
        json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
        };
        // Add your code above this line
    };
    });
    </script>
    <style>
    body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
    }
    h1 {
    font-size: 2em;
    font-weight: bold;
    }
    .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
    }
    button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
    }
    button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
    }
    </style>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
        The message will go here
    </p>
    <p>
        <button id="getMessage">
        Get Message
        </button>
    </p>
    ```
1. [Get JSON with the JavaScript fetch method](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-json-with-the-javascript-fetch-method)
    ```html
    <script>
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('getMessage').onclick= () => {
        // Add your code below this line
        fetch('/json/cats.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').innerHTML = JSON.stringify(data);
            });
        // Add your code above this line
        };
    });
    </script>
    <style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }
    h1 {
        font-size: 2em;
        font-weight: bold;
    }
    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }
    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }
    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
    </style>
    <h1>Cat Photo Finder</h1>
    <p id="message" class="box">
    The message will go here
    </p>
    <p>
    <button id="getMessage">
        Get Message
    </button>
    </p>
    ```
1. [Access the JSON Data from an API](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/access-the-json-data-from-an-api)
    ```html
        <script>
        document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('getMessage').onclick=function(){
            req=new XMLHttpRequest();
            req.open("GET",'/json/cats.json',true);
            req.send();
            req.onload=function(){
            json=JSON.parse(req.responseText);
            document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
            // Add your code below this line
            console.log(json[2].codeNames[1]);
            // Add your code above this line
            };
        };
        });
    </script>
    <style>
        body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
        }
        h1 {
        font-size: 2em;
        font-weight: bold;
        }
        .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
        }
        button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
        }
        button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
        }
    </style>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
        The message will go here
    </p>
    <p>
        <button id="getMessage">
        Get Message
        </button>
    </p>
    ```
1. [Convert JSON Data to HTML](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/convert-json-data-to-html)
    ```html
    <script>
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('getMessage').onclick=function(){
        let req=new XMLHttpRequest();
        req.open("GET",'/json/cats.json',true);
        req.send();
        req.onload=function(){
            let json=JSON.parse(req.responseText);
            var html = "";
            // Add your code below this line
            json.forEach(function(val) {
            var keys = Object.keys(val);
            html += "<div class = 'cat'>";
            keys.forEach(function(key) {
                html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
            });
            html += "</div><br>";
            });
            // Add your code above this line
            document.getElementsByClassName('message')[0].innerHTML=html;
        };
        };
    });
    </script>
    <style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }
    h1 {
        font-size: 2em;
        font-weight: bold;
    }
    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }
    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }
    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
    </style>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
    The message will go here
    </p>
    <p>
    <button id="getMessage">
        Get Message
    </button>
    </p>
    ```
1. [Render Images from Data Sources](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/render-images-from-data-sources)
    ```html
    <script>
    document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
        const req=new XMLHttpRequest();
        req.open("GET",'/json/cats.json',true);
        req.send();
        req.onload=function(){
        const json=JSON.parse(req.responseText);
        var html = "";
        json.forEach(function(val) {
            html += "<div class = 'cat'>";
            // Add your code below this line
            html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
            // Add your code above this line
            html += "</div><br>";
        });
        document.getElementsByClassName('message')[0].innerHTML=html;
        };
    };
    });
    </script>
    <style>
    body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
    }
    h1 {
    font-size: 2em;
    font-weight: bold;
    }
    .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
    }
    button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
    }
    button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
    }
    </style>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
        The message will go here
    </p>
    <p>
        <button id="getMessage">
        Get Message
        </button>
    </p>
    ```
1. [Pre-filter JSON to Get the Data You Need](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/pre-filter-json-to-get-the-data-you-need)
    ```html
    <script>
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('getMessage').onclick=function(){
        const req=new XMLHttpRequest();
        req.open("GET",'/json/cats.json',true);
        req.send();
        req.onload=function(){
            let json=JSON.parse(req.responseText);
            var html = "";
            // Add your code below this line
            json = json.filter(function(val) {
            return (val.id !== 1);
            });
            // Add your code above this line
            json.forEach(function(val) {
            html += "<div class = 'cat'>"

            html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

            html += "</div>"
            });
            document.getElementsByClassName('message')[0].innerHTML=html;
        };
        };
    });
    </script>
    <style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }
    h1 {
        font-size: 2em;
        font-weight: bold;
    }
    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }
    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }
    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
    </style>
    <h1>Cat Photo Finder</h1>
    <p class="message box">
    The message will go here
    </p>
    <p>
    <button id="getMessage">
        Get Message
    </button>
    </p>
    ```
1. [Get Geolocation Data to Find A User's GPS Coordinates](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/get-geolocation-data-to-find-a-users-gps-coordinates)
    ```html
    <script>
    // Add your code below this line
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude + "<br>longitude: " + position.coords.longitude;
        });
    }
    // Add your code above this line
    </script>
    <h4>You are here:</h4>
    <div id="data">

    </div>
    ```
1. [Post Data with the JavaScript XMLHttpRequest Method](https://www.freecodecamp.org/learn/data-visualization/json-apis-and-ajax/post-data-with-the-javascript-xmlhttprequest-method)
    ```html
    <script>
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('sendMessage').onclick=function(){
        
        var userName=document.getElementById('name').value;
        // Add your code below this line
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201){
            const serverResponse = JSON.parse(xhr.response);
            document
                .getElementsByClassName('message')[0]
                .textContent = serverResponse.userName + serverResponse.suffix;
            }
        };
        const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
        xhr.send(body);
        // Add your code above this line
        };
    });
    </script>
    <style>
    body {
        text-align: center;
        font-family: "Helvetica", sans-serif;
    }
    h1 {
        font-size: 2em;
        font-weight: bold;
    }
    .box {
        border-radius: 5px;
        background-color: #eee;
        padding: 20px 5px;
    }
    button {
        color: white;
        background-color: #4791d0;
        border-radius: 5px;
        border: 1px solid #4791d0;
        padding: 5px 10px 8px 10px;
    }
    button:hover {
        background-color: #0F5897;
        border: 1px solid #0F5897;
    }
    </style>
    <h1>Cat Friends</h1> 
    <p class="message box">
    Reply from Server will be here
    </p>
    <p>
    <label for="name">Your name:
        <input type="text" id="name"/>
    </label>
    <button id="sendMessage">
        Send Message
    </button>
    </p>
    ```