export default function Settings() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="max-w-2xl space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <p className="text-muted-foreground">Update your profile information here.</p>
        </div>
      </div>
    </div>
  );
}