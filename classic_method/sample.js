var numbers = [120,150,180,100,160,110];
var colors = ["blue", "red", "green", "orange", "violet", "brown", "rose"]
var barHeight = 40;

d3.select("svg")
.selectAll("rect")
.data(numbers)
.enter()
.append("rect")
.attr("width", d => d )
.attr("height", barHeight-4)
.attr("transform", (d,i) => "translate(250," + i * barHeight + ")")
.attr("fill",function(d,i){
    return colors[i];
 });

 $("#title-element").text("Bar Chart");
 $("#title-element").css("font-size", "20px");
 $("#title-element").css("font-weight", "bold");
 $("#title-element").css("text-align", "center");