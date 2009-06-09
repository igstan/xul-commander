/**
 * Must implement nsITreeView
 *
 * @see https://developer.mozilla.org/en/nsITreeView
 */
var drive = {
    rowCount : null,

    getCellText : function(row, column) {},

    setTree: function(treebox) {},

    isContainer: function(row) {},

    isSeparator: function(row) {},

    isSorted: function() {},

    getLevel: function(row) {},

    getImageSrc: function(row, col) {},

    getRowProperties: function(row, props) {},

    getCellProperties: function(row, col, props) {},

    getColumnProperties: function(colid, col, props) {}
};
