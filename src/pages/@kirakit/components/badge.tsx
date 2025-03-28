export default function Badge() {
  return (
    <div className="m-4 p-4 shadow rounded-xl">
      <h1 className="text-2xl font-bold">Badge</h1>
      <p className="text-lg">This is a simple badge component.</p>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">Default Badge</h1>
        <div className="mt-4 bg-slate-100 rounded-lg flex gap-4">
          <KBadge text="Default Badge" />
          <KBadge variant="primary" text="Default Badge" />
          <KBadge variant="secondary" text="Default Badge" />
          <KBadge variant="muted" text="Default Badge" />
          <KBadge variant="info" text="Default Badge" />
          <KBadge variant="success" text="Default Badge" />
          <KBadge variant="warning" text="Default Badge" />
          <KBadge variant="destructive" text="Default Badge" />
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">Rounded Pill Badge</h1>
        <div className="mt-4 bg-slate-100 rounded-lg flex gap-4">
          <KBadge shape="pill" text="Default Badge" />
          <KBadge shape="pill" variant="primary" text="Default Badge" />
          <KBadge shape="pill" variant="secondary" text="Default Badge" />
          <KBadge shape="pill" variant="muted" text="Default Badge" />
          <KBadge shape="pill" variant="info" text="Default Badge" />
          <KBadge shape="pill" variant="success" text="Default Badge" />
          <KBadge shape="pill" variant="warning" text="Default Badge" />
          <KBadge shape="pill" variant="destructive" text="Default Badge" />
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-lg shadow">
        <h1 className="text-xl font-bold">Square Badge</h1>
        <div className="mt-4 bg-slate-100 rounded-lg flex gap-4">
          <KBadge shape="square" text="Default Badge" />
          <KBadge shape="square" variant="primary" text="Default Badge" />
          <KBadge shape="square" variant="secondary" text="Default Badge" />
          <KBadge shape="square" variant="muted" text="Default Badge" />
          <KBadge shape="square" variant="info" text="Default Badge" />
          <KBadge shape="square" variant="success" text="Default Badge" />
          <KBadge shape="square" variant="warning" text="Default Badge" />
          <KBadge shape="square" variant="destructive" text="Default Badge" />
        </div>
      </div>
    </div>
  );
}
