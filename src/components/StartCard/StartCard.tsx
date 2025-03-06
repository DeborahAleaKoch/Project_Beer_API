import { Link } from "react-router-dom";

interface Props {
	imgName: string;
	linkName: string;
	linkTo: string;
}

const StartCard: React.FunctionComponent<Props> = ({
	imgName,
	linkName,
	linkTo,
}) => {
	return (
		<>
			<div className='mx-8 my-10'>
				<img
					src={`../../../public/${imgName}.svg`}
					alt='shelf full of alcohol bottles'
					className='w-screen object-contain
                    '
				/>
				<p
					className='bg-amber-300 text-4xl text-white py-2 px-4
                '
				>
					<Link to={linkTo}>{linkName}</Link>
				</p>
				<p className='text-base mt-4 font-bold'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
					similique quos id quo explicabo ducimus perspiciatis exercitationem
					voluptatibus quae, consectetur nam modi sequi mollitia voluptatem!
					Magni consectetur exercitationem illo id?
				</p>
			</div>
		</>
	);
};

export default StartCard;
