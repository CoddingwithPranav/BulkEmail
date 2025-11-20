import { Button } from '@/components/ui/button';
import { Sale } from '@/lib/types/vehicleSales';
import { createColumnHelper } from '@tanstack/react-table';
import { CalendarDays, Eye, MapPin, Phone, User } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

const columnHelper = createColumnHelper<Sale>();

export const useSoldVehicleTableColumn = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: 'vehicle',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Vehicle Info</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div className="text-sm font-semibold">
              <span className="text-red-500">Eng No:</span>{' '}
              {row.original.vehicle.engineeId}
            </div>
            <div className="text-sm font-semibold">
              <span className="text-green-500">Chassis No:</span>{' '}
              {row.original.vehicle.chessisId}
            </div>
            <div className="text-sm font-semibold">
              <span className="text-blue-500">Reg No:</span>{' '}
              {row.original.vehicle.registrationNo}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'customer',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Customer</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div className="flex items-center gap-2">
              <User size={12} className="text-red-600" />
              {row.original.customer.cusName}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-green-600" />
              {row.original.customer.tmNo1}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-blue-600" />
              {row.original.customer.pofficeAddress}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'dealer',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Dealer</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div className="flex items-center gap-2">
              <User size={12} className="text-red-600" />
              {row.original.dealer.cusName}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-green-600" />
              {row.original.dealer.panNo}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-blue-600" />
              {row.original.dealer.pofficeAddress}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'resaleDate',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Resale Date</span>
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-red-600" />
            {row.original.resale.saleDate}
          </div>
        ),
      }),

      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <Link href={`/`}>
              <Button variant="outline" size="sm" className="text-xs px-2 py-1">
                <Eye className="w-4 h-4 mr-1" />
                View
              </Button>
            </Link>
          </div>
        ),
      }),
    ],
    []
  );
};

export default useSoldVehicleTableColumn;
