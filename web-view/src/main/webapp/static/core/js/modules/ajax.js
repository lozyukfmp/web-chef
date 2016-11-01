define(['jquery', 'details'], function ($, details) {

    function getItemList(itemType) {
        $.ajax({
            url: itemType + "/all",
            success: function (response) {
                details.showItemList(itemType, response);
            }
        });
    }

    function getItem(itemType, item) {
        $.ajax({
            url: itemType + "/show/" + item.id,
            success: function (response) {
                console.log("SHOW RESULT : " + response)
                details.showDetails(itemType, response);
            }
        });

    }

    function editItem(itemType, item) {
        $.ajax({
            url: itemType + "/edit",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(item),
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
            },
            success: function (response) {
                details.showDetails(itemType, response);
            }
        });
    }

    return {
        getItemList: getItemList,
        getItem: getItem,
        editItem: editItem
    };
});