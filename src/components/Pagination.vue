<template>
    <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 0">Previous</button>
        <span>{{ currentPage + 1 }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages - 1">Next</button>
    </div>
</template>
  
<script>
import { ref, computed, watch } from 'vue';

export default {
    props: {
        totalQuestions: Number,
        questionsPerPage: Number,
        currentPage: Number,
        onPageChange: Function,
    },
    setup(props) {
        const currentPage = ref(props.currentPage);

        // Calculate total pages based on questionsPerPage
        const totalPages = computed(() => Math.ceil(props.totalQuestions / props.questionsPerPage));

        // Watch for changes in currentPage and notify the parent component
        watch(currentPage, (newPage) => {
            if (props.onPageChange) {
                props.onPageChange(newPage);
            }
        });

        const nextPage = () => {
            if (currentPage.value < totalPages.value - 1) {
                currentPage.value++;
            }
        };

        const prevPage = () => {
            if (currentPage.value > 0) {
                currentPage.value--;
            }
        };

        return { currentPage, totalPages, nextPage, prevPage };
    },
};
</script>
  
<style scoped>
/* Component styles go here */
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

button {
    padding: 10px;
    font-size: 14px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
}

button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}
</style>
  