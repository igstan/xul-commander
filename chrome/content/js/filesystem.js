/**
 * Must implement nsITreeView
 *
 * @see https://developer.mozilla.org/en/nsITreeView
 */
var drive = {
    rowCount : 100,

    getCellText : function(row, column) {
        if (column.id === "name-col") {
            return "Row " + row;
        } else {
            return "February 18";
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
