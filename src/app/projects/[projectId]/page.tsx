type Props = {
  params: Promise<{ projectId: string }>;
};

const page = async ({ params }: Props) => {
  const { projectId } = await params;

  return (
    <div className="bg-white flex-1 min-h-0 overflow-hidden">
      project {projectId} page
    </div>
  );
};

export default page;
