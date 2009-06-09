/**
 * Must implement nsITreeView
 *
 * @see https://developer.mozilla.org/en/nsITreeView
 */
var drive = {
    rowCount : 40,

    getCellText : function(row, column) {
        switch (column.id) {
            case "name-col":
                return "index.php";
            case "ext-col":
                return "php";
            case "size-col":
                return "131";
            case "date-col":
                return "06/10/2009";
            case "attr-col":
                return "-a--";
        }
    },

    setTree: function(treebox) {
        this.treebox = treebox;
    },

    isContainer: function(row) {
        return false;
    },

    isSeparator: function(row) {
        return false;
    },

    isSorted: function() {
        return false;
    },

    getLevel: function(row) {
        return 0;
    },

    getImageSrc: function(row, col) {
        return null;
    },

    getRowProperties: function(row, props) {},

    getCellProperties: function(row, col, props) {},

    getColumnProperties: function(colid, col, props) {}
};
