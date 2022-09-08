import React, { useCallback, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { FaChevronUp } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import Question, { IQuestion } from '../../components/Question';
import theme from '../../styles/theme';
import questions from '../../utils/questions.json';
import {
	Container,
	ContainerCheckLabel,
	ContainerIcon,
	ContainerLabels,
	Header,
	HeaderQuestion,
	Label,
	LabelText,
	TitleGroup,
	TitleQuestion,
	ToggleButton,
} from './styles';

export interface answeredQuestionsProps {
	questionId: string;
	answerId: string;
}
const Home: React.FC = () => {
	const [answeredQuestions, setAnsweredQuestions] = useState<
		answeredQuestionsProps[]
	>([]);
	const [selectedQuestion, setSelectedQuestion] = useState<IQuestion>();
	const handleMarkQuestion = (response: answeredQuestionsProps) => {
		setAnsweredQuestions((old) => [
			...old.filter((item) => item.questionId !== response.questionId),
			response,
		]);
	};
	const handlePreviousQuestion = useCallback(() => {
		if (selectedQuestion) {
			setSelectedQuestion(
				questions[
					questions.findIndex((item) => item.id === selectedQuestion.id) - 1
				]
			);
		}
	}, [selectedQuestion]);
	const handleNextQuestion = useCallback(() => {
		if (selectedQuestion) {
			setSelectedQuestion(
				questions[
					questions.findIndex((item) => item.id === selectedQuestion.id) + 1
				]
			);
		}
	}, [selectedQuestion]);

	const [show, setShow] = useState(true);
	return (
		<Container>
			<Header>
				<TitleGroup>Acentuação Gráfica</TitleGroup>
				<ToggleButton rotate={show} onClick={() => setShow((old) => !old)}>
					<FaChevronUp fill="white" />
				</ToggleButton>
			</Header>
			<section>
				<HeaderQuestion>
					<ContainerIcon>
						<HiOutlineClipboardList size={20} stroke={theme.COLORS.GRAY[100]} />
					</ContainerIcon>
					<TitleQuestion>Uso dos Porquês</TitleQuestion>
				</HeaderQuestion>
				<ContainerLabels show={show}>
					{questions.map((item, index) => (
						<Label
							key={item.id}
							selected={selectedQuestion && selectedQuestion.id === item.id}
							onClick={() => setSelectedQuestion(item)}
						>
							<LabelText>
								Exercício {index + 1}
								{answeredQuestions.find(
									(answer) => answer.questionId === item.id
								) && (
									<ContainerCheckLabel>
										<BsCheckLg />
									</ContainerCheckLabel>
								)}
							</LabelText>
						</Label>
					))}
				</ContainerLabels>

				{selectedQuestion && (
					<Question
						index={
							questions.findIndex((item) => item.id === selectedQuestion.id) + 1
						}
						totalQuestions={questions.length + 1}
						question={selectedQuestion}
						answeredQuestions={answeredQuestions}
						handleMarkQuestion={handleMarkQuestion}
						handlePreviousQuestion={
							questions.findIndex((item) => item.id === selectedQuestion.id) > 0
								? handlePreviousQuestion
								: undefined
						}
						handleNextQuestion={
							questions.findIndex((item) => item.id === selectedQuestion.id) <
							questions.length - 1
								? handleNextQuestion
								: undefined
						}
					/>
				)}
			</section>
		</Container>
	);
};

export default Home;
