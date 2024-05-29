document.addEventListener('DOMContentLoaded', function() {
    const addCategoryIcon = document.querySelector('.add-category');

    addCategoryIcon.addEventListener('click', function() {
        const categoryGroup = document.querySelector('.category-group');
        const newCategoryGroup = categoryGroup.cloneNode(true);


        newCategoryGroup.querySelector('.add-category').addEventListener('click', arguments.callee);
        newCategoryGroup.querySelector('.remove-category').addEventListener('click', function() {
            if (document.querySelectorAll('.category-group').length > 1) {
                newCategoryGroup.remove();
            } else {
                alert('At least one category must remain.');
            }
        });

        categoryGroup.after(newCategoryGroup);
    });

    const initialRemoveCategoryIcon = document.querySelector('.remove-category');
    initialRemoveCategoryIcon.addEventListener('click', function() {
        if (document.querySelectorAll('.category-group').length > 1) {
            this.closest('.category-group').remove();
        } else {
            alert('At least one category must remain.');
        }
    });
});