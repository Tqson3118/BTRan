import { getAllQuestions, getAllFlashcards, getAllChapters, searchContent, generateMockExamSession } from '../src/data/index';

console.log("Chapters count:", getAllChapters().length);
console.log("Questions count:", getAllQuestions().length);
console.log("Flashcards count:", getAllFlashcards().length);

const searchResults = searchContent("thừa kế");
console.log("Search 'thừa kế' results:", searchResults.length);
if (searchResults.length > 0) {
  console.log("First search result:", searchResults[0].type, searchResults[0].title);
}

const mockExam = generateMockExamSession({ questionCount: 30, durationMinutes: 45 });
console.log("Mock exam generated questions:", mockExam.questions.length);
console.log("Mock exam ID:", mockExam.id);
