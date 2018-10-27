import React from 'react';
import { 
  ComposedChart, 
  Area, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  AreaChart
} from 'recharts';

const DATA = [
  { month: 'Jan', revenue: 125123, visitors: 171282  },
  { month: 'Feb', revenue: 105467, visitors: 152382  },
  { month: 'Mar', revenue: 86345,  visitors: 256222  },
  { month: 'Apr', revenue: 192567, visitors: 302823  },
  { month: 'May', revenue: 135836, visitors: 223563  },
  { month: 'Jun', revenue: 93536,  visitors: 234674  },
  { month: 'Jul', revenue: 182576, visitors: 345143  },
  { month: 'Aug', revenue: 76737,  visitors: 176332  },
  { month: 'Sep', revenue: 162342, visitors: 223425  },
  { month: 'Oct', revenue: 114764, visitors: 340289  },
  { month: 'Nov', revenue: 204695, visitors: 426264  },
  { month: 'Dec', revenue: 232687, visitors: 456292  }
];

const PRODUCTS = [
  { month: 'Jan', accessories: 234, phones: 178, laptops: 112 },
  { month: 'Feb', accessories: 325, phones: 155, laptops: 161 },
  { month: 'Mar', accessories: 202, phones: 145, laptops: 191 },
  { month: 'Apr', accessories: 228, phones: 168, laptops: 111 },
  { month: 'May', accessories: 347, phones: 171, laptops: 114 },
  { month: 'Jun', accessories: 304, phones: 158, laptops: 111 }
];

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const renderTooltipContent = (o) => {
	const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);
  
  return (
  	<div className="customized-tooltip-content">
    	<p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
      	{
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} style={{color: entry.color}}>
            	{`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

class GraphSection extends React.Component {

  render() {
    return (
      <section className='graphSection'>
        <div className='row'>
          <div className='col-md-8'>
            <h2>Revenue and Traffic</h2>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                data={DATA}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend margin={{ top: 20 }} />
                <CartesianGrid strokeDasharray='3 3' />
                <Area type='monotone' dataKey='visitors' fill='#efefef' name='Visitors' />
                <Bar dataKey='revenue' barSize={30} fill='#8BC34A' name='Revenue' />
              </ComposedChart>
            </ResponsiveContainer>
            
          </div>
          <div className='col-md-4'>
            <h2>Product Sales</h2>
            <ResponsiveContainer width="100%" height={378}>
              <AreaChart 
                data={PRODUCTS}
                stackOffset='expand'
                margin={{ top: 20, right: 20, bottom: 20, left: -20 }} >
                  <XAxis dataKey='month' />
                  <YAxis tickFormat={toPercent} />
                  <Tooltip content={renderTooltipContent}/>
                  <Area type='monotone' dataKey='accessories' stackId="1" stroke='#8884d8' fill='#8884d8' />
                  <Area type='monotone' dataKey='phones' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                  <Area type='monotone' dataKey='laptops' stackId="1" stroke='#ffc658' fill='#ffc658'/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    );
  }
}

export default GraphSection;