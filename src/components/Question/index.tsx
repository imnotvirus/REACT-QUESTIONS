import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { answeredQuestionsProps } from '../../pages/Home';
import {
	Button,
	Container,
	Footer,
	Header,
	IndexResponse,
	Main,
	QuestionDescription,
	QuestionLabel,
	QuestionNumber,
	ResponseContainer,
	Responses,
	ResponseText,
} from './styles';
export interface IQuestion {
	id: string;
	numberQuestion: number;
	description: string;
	responses: IAlternatives[];
}
interface IAlternatives {
	id: string;
	text: string;
	correct: boolean;
}

interface QuestionProps {
	index: number;
	totalQuestions: number;
	question: IQuestion;
	handleMarkQuestion: (response: answeredQuestionsProps) => void;
	answeredQuestions: answeredQuestionsProps[];
	handleNextQuestion?: () => void;
	handlePreviousQuestion?: () => void;
}
const Question: React.FC<QuestionProps> = ({
	index,
	totalQuestions,
	question,
	handleNextQuestion,
	handlePreviousQuestion,
	handleMarkQuestion,
	answeredQuestions,
}) => {
	const handleMarkResponse = (responseId: string) => {
		handleMarkQuestion({ answerId: responseId, questionId: question.id });
	};
	return (
		<Container>
			<Header>
				<QuestionNumber>({question.numberQuestion})</QuestionNumber>
				<QuestionLabel>
					Exercício {index} / {totalQuestions}
				</QuestionLabel>
			</Header>
			<Main>
				<QuestionDescription>{`${question.description}`}</QuestionDescription>

				<Responses>
					{question.responses.map((item, index) => (
						<ResponseContainer
							key={item.id}
							onClick={() => {
								handleMarkResponse(item.id);
							}}
						>
							<IndexResponse>
								{String.fromCharCode(index + 'a'.charCodeAt(0))}
							</IndexResponse>
							<ResponseText>{item.text}</ResponseText>
							{answeredQuestions.find(
								(answerer) =>
									answerer.questionId === question.id &&
									answerer.answerId === item.id
							) && <BsCheckLg fill="#6b6b6b" />}
						</ResponseContainer>
					))}
				</Responses>
			</Main>
			<Footer>
				{handlePreviousQuestion && (
					<Button
						onClick={() => {
							handlePreviousQuestion();
						}}
					>
						Pergunta anterior
					</Button>
				)}
				{handleNextQuestion && (
					<Button
						onClick={() => {
							handleNextQuestion();
						}}
					>
						Proxima pergunta
					</Button>
				)}
			</Footer>
		</Container>
	);
};

export default Question;
