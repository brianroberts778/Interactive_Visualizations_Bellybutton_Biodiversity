// Use the D3 library to read in samples.json.
var dropdownMenu = d3.select("#selDataset");
d3.json("samples.json").then(sample_data => {
    console.log(sample_data.names);
    sample_data.names.forEach(loop_data => {
        dropdownMenu.append("option").text(loop_data);
    })
    optionChanged(sample_data.names[0])
});

function optionChanged(user_id){
    d3.json("samples.json").then(demo_data => {
        var dataHolder = d3.select("#sample-metadata");
        //console.log(demo_data.metadata)
        var filterData = demo_data.metadata.filter(md => md.id == user_id);
        //console.log(filterData);
        var firstInfo = filterData[0];
        //console.log(firstInfo);
        dataHolder.html("")
        Object.entries(firstInfo).forEach(([key,value])=>{
            dataHolder.append("p").text(`${key}: ${value}`);
        });
        var filterSampleData = demo_data.samples.filter(sid => sid.id == user_id)[0];
        //Place bar chart here, fetch variables from samples.json "x".samples
        var sampleValues = filterSampleData.sample_values.slice(0,10).reverse();
        // console.log(sampleValues)
        var ids = filterSampleData.otu_ids;
        // console.log(ids)
        //var labels = demo_data.samples[0].otu_labels.slice(0,10).reverse();
        // console.log(labels)
        // Retrieve only the top 10 OTUs present in a subject
        var topOTUs = filterSampleData.otu_ids.slice(0,10).reverse();
        // Format the OTUs for our plot
        var idOTUs = topOTUs.map(d => "OTU " + d);
        console.log(`OTU_IDS: ${idOTUs}`)
        // Retrieve the top 10 labels for our plot (initial var above)
        var labels = filterSampleData.otu_labels.slice(0,10).reverse();
        console.log(`OTU_Labels: ${labels}`)
        // Create trace for our bar chart
        var trace1 = {
            x: sampleValues,
            y: idOTUs,
            text: labels,
            marker: {color: 'blue'},
            type:"bar",
            orientation: "h"
        };
        // Create data variable for our bar chart
        var data1 = [trace1];
        // Create layout for our bar chart
        var layout1 = {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 20
            }
        };
        // Create our bar chart
        Plotly.newPlot("bar", data1, layout1);

        // Create trace for our bubble chart
        var trace2 = {
            x: filterSampleData.otu_ids,
            y: filterSampleData.sample_values,
            mode: "markers",
            marker: {
                size: filterSampleData.sample_values,
                color: filterSampleData.otu_ids
            },
            text: filterSampleData.otu_labels

        };

        // Create data variable for our bubble chart
        var data2 = [trace2];

        // Create layout for our bubble chart
        var layout2 = {
            xaxis: {title: "OTU ID"},
            height: 500,
            width: 1000
        };

        // Create our bubble chart
        Plotly.newPlot("bubble", data2, layout2)

    


    });
}

