import AdminDrawer from '../components/AdminDrawer';
import GridCanvas from '../components/GridCanvas';

export default function AdminRoute() {
  return (
    <div className="flex">
      <AdminDrawer />
      <GridCanvas />
    </div>
  );
}
