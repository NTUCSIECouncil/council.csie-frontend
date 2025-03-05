curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"環境科學入門","lecturer":"陳志強","tags":["科學","環境"],"content":"學習地球環境的基本科學概念。","creator":"00000001-0003-0000-0000-000000000009","course":"00000003-0003-0000-0000-000000000009","semester":"113-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"機器學習基礎","lecturer":"王大明","tags":["AI","數學"],"content":"介紹監督學習與非監督學習。","creator":"00000001-0003-0000-0000-000000000010","course":"00000003-0003-0000-0000-000000000010","semester":"113-2"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"計算機網路","lecturer":"趙建國","tags":["網路","安全"],"content":"學習TCP/IP協議與網路架構。","creator":"00000001-0003-0000-0000-000000000009","course":"00000003-0003-0000-0000-000000000011","semester":"114-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"作業系統","lecturer":"陳麗華","tags":["系統","安全"],"content":"學習記憶體管理與程序調度。","creator":"00000001-0003-0000-0000-000000000010","course":"00000003-0003-0000-0000-000000000012","semester":"113-2"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"雲端運算","lecturer":"孫浩","tags":["雲端","分佈式系統","安全"],"content":"學習AWS、GCP與Azure的基礎。","creator":"00000001-0003-0000-0000-000000000011","course":"00000003-0003-0000-0000-000000000009","semester":"113-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"量子計算導論","lecturer":"楊志強","tags":["量子計算","數學"],"content":"學習量子位元與疊加原理。","creator":"00000001-0003-0000-0000-000000000009","course":"00000003-0003-0000-0000-000000000013","semester":"113-2"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"數位邏輯設計","lecturer":"黃正男","tags":["硬體","邏輯","數學"],"content":"學習電路設計與布爾代數。","creator":"00000001-0003-0000-0000-000000000012","course":"00000003-0003-0000-0000-000000000014","semester":"114-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"深度學習","lecturer":"李美玲","tags":["AI","神經網路","數學"],"content":"學習CNN、RNN與Transformer。","creator":"00000001-0003-0000-0000-000000000011","course":"00000003-0003-0000-0000-000000000010","semester":"113-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"密碼學","lecturer":"張國強","tags":["安全","數學"],"content":"學習對稱與非對稱加密。","creator":"00000001-0003-0000-0000-000000000009","course":"00000003-0003-0000-0000-000000000012","semester":"114-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"線性代數","lecturer":"鄭偉","tags":["數學","AI"],"content":"學習矩陣運算與向量空間。","creator":"00000001-0003-0000-0000-000000000010","course":"00000003-0003-0000-0000-000000000013","semester":"113-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"計算機組織","lecturer":"林明","tags":["計算機架構","硬體"],"content":"學習處理器架構與指令集。","creator":"00000001-0003-0000-0000-000000000012","course":"00000003-0003-0000-0000-000000000014","semester":"113-2"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"軟體工程","lecturer":"許志豪","tags":["軟體","開發","安全"],"content":"介紹敏捷開發與測試驅動開發。","creator":"00000001-0003-0000-0000-000000000011","course":"00000003-0003-0000-0000-000000000009","semester":"114-1"}'
curl -X POST localhost:3010/api/articles -H "Content-Type: application/json" -d '{"title":"數據庫系統","lecturer":"周安","tags":["數據庫","SQL","AI"],"content":"學習關聯數據庫與查詢優化。","creator":"00000001-0003-0000-0000-000000000009","course":"00000003-0003-0000-0000-000000000010","semester":"113-2"}'

curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"普通生物學","course":"00000003-0003-0000-0000-000000000000","semester":"112-1","downloadLink":"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"微積分","course":"00000003-0003-0000-0000-000000000001","semester":"112-1","downloadLink":"https://www.example.com/calc_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"物理學概論","course":"00000003-0003-0000-0000-000000000002","semester":"112-1","downloadLink":"https://www.example.com/physics_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"現代文學","course":"00000003-0003-0000-0000-000000000003","semester":"112-2","downloadLink":"https://www.example.com/literature_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"程式設計基礎","course":"00000003-0003-0000-0000-000000000004","semester":"112-2","downloadLink":"https://www.example.com/programming_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"人工智慧導論","course":"00000003-0003-0000-0000-000000000005","semester":"112-1","downloadLink":"https://www.example.com/ai_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"社會學基礎","course":"00000003-0003-0000-0000-000000000006","semester":"112-2","downloadLink":"https://www.example.com/sociology_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"經濟學概論","course":"00000003-0003-0000-0000-000000000007","semester":"112-1","downloadLink":"https://www.example.com/economics_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"高等數學期中考","course":"00000003-0003-0000-0000-000000000008","semester":"112-1","downloadLink":"https://www.example.com/math_midterm"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"化學實驗測驗","course":"00000003-0003-0000-0000-000000000009","semester":"112-2","downloadLink":"https://www.example.com/chemistry_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"心理學期末考","course":"00000003-0003-0000-0000-000000000010","semester":"112-1","downloadLink":"https://www.example.com/psychology_final"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"企業管理測驗","course":"00000003-0003-0000-0000-000000000011","semester":"112-2","downloadLink":"https://www.example.com/management_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"計算機科學期中考","course":"00000003-0003-0000-0000-000000000012","semester":"112-1","downloadLink":"https://www.example.com/computer_science_midterm"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"經濟學期末考","course":"00000003-0003-0000-0000-000000000013","semester":"112-1","downloadLink":"https://www.example.com/economics_final"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"國際關係測驗","course":"00000003-0003-0000-0000-000000000014","semester":"112-2","downloadLink":"https://www.example.com/international_relations_quiz"}'
curl localhost:3010/api/quizzes -H "Content-Type: application/json" -d '{"title":"物理學期中測驗","course":"00000003-0003-0000-0000-000000000015","semester":"112-1","downloadLink":"https://www.example.com/physics_midterm"}'
