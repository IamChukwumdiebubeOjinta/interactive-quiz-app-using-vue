<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <!-- Quiz Header -->

    <fieldset class="mt-8 max-w-[500px] mx-auto">
      <legend class="text-sm font-semibold leading-6 text-gray-900">
        Attempt all questions
      </legend>

      <div class="flex flex-col" v-for="(question, index) in quizData.quiz" :key="index">
        <p class="mt-1 text-sm leading-6 text-gray-600">
          {{ question.question }}
        </p>
        <div class="mt-4 space-y-6">
          <li v-for="(option, key) in question.options" :key="key" @click="selectOption(index, key)"
            class="flex items-center gap-x-3">
            <input id="options" name="options" type="radio"
              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label for="options" class="block text-sm font-medium leading-6 text-gray-900">{{ key }}. {{ option }}</label>
          </li>

          <!-- <Pagination :totalQuestions="quizData.quiz.length" :questionsPerPage="questionsPerPage" :currentPage="currentPage" @onPageChange="changePage" /> -->

          <div class="w-full flex justify-end">
            <button @click="submitQuiz"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-end">Submit Answer</button>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import Pagination from "../components/Pagination.vue";

const quizData = ref([]);
const currentPage = ref(0);
const userResponses = ref({});

const questionsPerPage = 1;

const fetchData = async () => {
  try {
    const response = await fetch("../data.json");
    quizData.value = await response.json();

    console.log(quizData.value.quiz);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
  }
};

onMounted(() => {
  fetchData();
});

const selectOption = (questionIndex, optionKey) => {
  userResponses.value[questionIndex] = optionKey;
};

const submitQuiz = () => {
  console.log("User Responses:", userResponses.value);

  const score = calculateScore()

};

const displayedQuestions = computed(() => {
  const start = currentPage * questionsPerPage;
  const end = start + questionsPerPage;
  return quizData.quiz?.slice(start, end);
})

const changePage = (newPage) => {
  currentPage.value = newPage;
};

const calculateScore = () => {
  
}


console.log(displayedQuestions);
</script>
