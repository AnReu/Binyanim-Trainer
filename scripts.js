function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            //console.log(rawFile.responseText)
            callback(rawFile.responseText);
        } else {
            console.log(rawFile)
        }
    }
    rawFile.send(null);
}

function filter_verb_list(allowed_tenses, selected_binyan, verb_list) {
    console.log(verb_list)
    if(old_tenses != allowed_tenses || old_binyan != selected_binyan){
        verb_list_filtered = verb_list.filter((elem)=>{
            return allowed_tenses.indexOf(elem['tense']) >= 0 && selected_binyan == (elem['binyan'])
        })

        old_tenses = allowed_tenses
        old_binyan = selected_binyan
    }

    return verb_list_filtered

}

function get_new_verb(tenses_list, binyanim_list, verb_list){
    binyanim_list_length = binyanim_list.length
    binyan_index = Math.floor(Math.random() * binyanim_list_length)

    selected_binyan = binyanim_list[binyan_index]
    verb_list_filtered = filter_verb_list(allowed_tenses, selected_binyan, verb_list)

    verb_list_length = verb_list_filtered.length
    verb_index = Math.floor(Math.random() * verb_list_length)

    console.log(verb_list_filtered[verb_index])

    return verb_list_filtered[verb_index]


}