import React from 'react';
import Art1 from '../../../../images/ima/art1.jpg'
import Art2 from '../../../../images/ima/art2.jpg'
import Art3 from '../../../../images/ima/art3.jpg'
import Art4 from '../../../../images/ima/art4.jpg'

const Article = () => {
    return (
        <section className="py-6 sm:py-12 bg-slate-400 rounded dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center ">
			<h2 className="text-3xl font-bold">Photo view and date</h2>
			<p className="font-serif text-sm dark:text-gray-400">Every picture is done in quality, which is some memorable moment.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
			<article className="flex flex-col bg-slate-300	">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={Art1} />
				
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Every picture is done in quality, which is some memorable moment</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-slate-300	">
				<a rel="noopener noreferrer" href="#" aria-label="Every picture is done in quality, which is some memorable moment">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={Art3} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Every picture is done in quality, which is some memorable moment"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Every picture is done in quality, which is some memorable moment</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 2, 2020</span>
						<span>2.2K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-slate-300	">
				<a rel="noopener noreferrer" href="#" aria-label="Every picture is done in quality, which is some memorable moment">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={Art2} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Every picture is done in quality, which is some memorable moment"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Every picture is done in quality, which is some memorable moment</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-slate-300	">
				<a rel="noopener noreferrer" href="#" aria-label="Every picture is done in quality, which is some memorable moment">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={Art4} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Every picture is done in quality, which is some memorable moment"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Every picture is done in quality, which is some memorable moment</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
    );
};

export default Article;