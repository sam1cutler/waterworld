const articlesHelpers = {

    sortArticleListByAlpha(totalList, attribute, direction) {

        let orderedList = totalList;
    
        orderedList.sort( (a, b) => {
    
            let finalA = '';
            a[attribute] ? finalA = a[attribute] : finalA = a['story_'+attribute]
            let finalB = '';
            b[attribute] ? finalB = b[attribute] : finalB = b['story_'+attribute]
    
            const c = finalA.replace(/["“”.':;-]/g, '').toLowerCase();
            const d = finalB.replace(/["“”.':;-]/g, '').toLowerCase();
    
            if (c === d) {
                return 0;
            }
            
            if (direction === 'ascending') {
                return c.localeCompare(d);
            } else {
                return d.localeCompare(c);
            }
            
        })
    
        return orderedList;
    
    },

    sortArticleListByComments(totalList, direction) {

        let orderedList = totalList;
    
        orderedList.sort( (a, b) => {
    
            const c = a.num_comments;
            const d = b.num_comments;
    
            if (direction === 'ascending') {
                return c-d;
            } else {
                return d-c;
            }
            
        })
    
        return orderedList;
    
    },

}


export default articlesHelpers;