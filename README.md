# Interactive Visualizations Bellybutton Biodiversity

In this project, I've built an interactive dashboard to explore a Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Step 1: Plotly
1. Use the D3 library to read in samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
 - Use sample_values as the values for the bar chart.
 - Use otu_ids as the labels for the bar chart.
 - Use otu_labels as the hovertext for the chart.

3. Create a bubble chart that displays each sample.
 - Use otu_ids for the x values.
 - Use sample_values for the y values. 
 - Use sample_values for the marker size.
 - Use otu_ids for the marker colors.
 - Use otu_labels for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all of the plots any time that a new sample is selected.

<img width="463" alt="bellybutton1" src="https://user-images.githubusercontent.com/70656160/113900183-8f031100-979b-11eb-942a-cb82de90196b.png">

<img width="991" alt="bellybutton2" src="https://user-images.githubusercontent.com/70656160/113900243-9e825a00-979b-11eb-8f1d-6059e9532d28.png">
