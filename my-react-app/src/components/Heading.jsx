export default function Heading({ title }) {
  return (
    <div className="text-center my-10 px-4">
      <h2 className="text-5xl font-bold text-blue-700 uppercase tracking-wide mb-4 relative inline-block">
        {title}
        <span className="absolute left-1/2 -bottom-2 w-32 h-1 bg-orange-500 transform -translate-x-1/2 rounded-full"></span>
      </h2>
    </div>
  );
}