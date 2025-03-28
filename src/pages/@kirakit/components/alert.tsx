export default function Alert() {
  return (
    <div className="m-4 p-4 shadow rounded-xl">
      <h1 className="text-2xl font-bold">Alert</h1>
      <p className="text-lg">This is a simple alert component.</p>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">One Line Alert</h1>
        <div className="mt-4 bg-slate-100 rounded-lg grid grid-cols-2 gap-4">
          <KAlert title="Hey, This is a one-line alert" />
          <KAlert title="Hey, This is a one-line alert" variant="primary" />
          <KAlert title="Hey, This is a one-line alert" variant="secondary" />
          <KAlert title="Hey, This is a one-line alert" variant="muted" />
          <KAlert title="Hey, This is a one-line alert" variant="info" />
          <KAlert title="Hey, This is a one-line alert" variant="success" />
          <KAlert title="Hey, This is a one-line alert" variant="warning" />
          <KAlert title="Hey, This is a one-line alert" variant="destructive" />
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">Title + Description Alert</h1>
        <div className="mt-4 bg-slate-100 rounded-lg grid grid-cols-2 gap-4">
          <KAlert
            title="Default Alert"
            description="Hey, This is a alert with title and description"
          />
          <KAlert
            title="Primary Alert"
            description="Hey, This is a alert with title and description"
            variant="primary"
          />
          <KAlert
            title="Secondary Alert"
            description="Hey, This is a alert with title and description"
            variant="secondary"
          />
          <KAlert
            title="Muted Alert"
            description="Hey, This is a alert with title and description"
            variant="muted"
          />
          <KAlert
            title="Info Alert"
            description="Hey, This is a alert with title and description"
            variant="info"
          />
          <KAlert
            title="Success Alert"
            description="Hey, This is a alert with title and description"
            variant="success"
          />
          <KAlert
            title="Warning Alert"
            description="Hey, This is a alert with title and description"
            variant="warning"
          />
          <KAlert
            title="Destructive Alert"
            description="Hey, This is a alert with title and description"
            variant="destructive"
          />
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">Title + Description + Icon Alert</h1>
        <div className="mt-4 bg-slate-100 rounded-lg grid grid-cols-2 gap-4">
          <KAlert
            title="Default Alert"
            description="Hey, This is a alert with title and description"
            icon="camera"
          />
          <KAlert
            title="Primary Alert"
            description="Hey, This is a alert with title and description"
            variant="primary"
            icon="camera"
          />
          <KAlert
            title="Secondary Alert"
            description="Hey, This is a alert with title and description"
            variant="secondary"
            icon="camera"
          />
          <KAlert
            title="Muted Alert"
            description="Hey, This is a alert with title and description"
            variant="muted"
            icon="camera"
          />
          <KAlert
            title="Info Alert"
            description="Hey, This is a alert with title and description"
            variant="info"
            icon="camera"
          />
          <KAlert
            title="Success Alert"
            description="Hey, This is a alert with title and description"
            variant="success"
            icon="camera"
          />
          <KAlert
            title="Warning Alert"
            description="Hey, This is a alert with title and description"
            variant="warning"
            icon="camera"
          />
          <KAlert
            title="Destructive Alert"
            description="Hey, This is a alert with title and description"
            variant="destructive"
            icon="camera"
          />
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">Outline Alert</h1>
        <div className="mt-4 bg-slate-100 rounded-lg grid grid-cols-2 gap-4">
          <KAlert
            title="Default Alert"
            description="Hey, This is a alert with title and description"
            icon="camera"
            type="outline"
          />
          <KAlert
            title="Primary Alert"
            description="Hey, This is a alert with title and description"
            variant="primary"
            icon="camera"
            type="outline"
          />
          <KAlert
            title="Secondary Alert"
            description="Hey, This is a alert with title and description"
            variant="secondary"
            icon="camera"
            type="outline"
          />
          <KAlert
            title="Muted Alert"
            description="Hey, This is a alert with title and description"
            variant="muted"
            icon="camera"
            type="outline"
          />
          <KAlert
            title="Info Alert"
            description="Hey, This is a alert with title and description"
            variant="info"
            icon="camera"
            type="outline"
          />
          <KAlert
            title="Success Alert"
            description="Hey, This is a alert with title and description"
            variant="success"
            icon="camera"
            type="outline"
          />
          <KAlert
            title="Warning Alert"
            description="Hey, This is a alert with title and description"
            variant="warning"
            icon="camera"
            type="outline"
          />
          <KAlert
            title="Destructive Alert"
            description="Hey, This is a alert with title and description"
            variant="destructive"
            icon="camera"
            type="outline"
          />
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">Tonal Alert</h1>
        <div className="mt-4 bg-slate-100 rounded-lg grid grid-cols-2 gap-4">
          <KAlert
            title="Default Alert"
            description="Hey, This is a alert with title and description"
            icon="camera"
            type="tonal"
          />
          <KAlert
            title="Primary Alert"
            description="Hey, This is a alert with title and description"
            variant="primary"
            icon="camera"
            type="tonal"
          />
          <KAlert
            title="Secondary Alert"
            description="Hey, This is a alert with title and description"
            variant="secondary"
            icon="camera"
            type="tonal"
          />
          <KAlert
            title="Muted Alert"
            description="Hey, This is a alert with title and description"
            variant="muted"
            icon="camera"
            type="tonal"
          />
          <KAlert
            title="Info Alert"
            description="Hey, This is a alert with title and description"
            variant="info"
            icon="camera"
            type="tonal"
          />
          <KAlert
            title="Success Alert"
            description="Hey, This is a alert with title and description"
            variant="success"
            icon="camera"
            type="tonal"
          />
          <KAlert
            title="Warning Alert"
            description="Hey, This is a alert with title and description"
            variant="warning"
            icon="camera"
            type="tonal"
          />
          <KAlert
            title="Destructive Alert"
            description="Hey, This is a alert with title and description"
            variant="destructive"
            icon="camera"
            type="tonal"
          />
        </div>
      </div>
    </div>
  );
}
